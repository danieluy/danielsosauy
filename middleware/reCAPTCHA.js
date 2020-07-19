const request = require('request');
const MIN_SCORE = 0.5;

module.exports = async function (req, res, next) {
  if (process.env.NODE_ENV === 'development') {
    return next();
  }

  try {
    const rcToken = req.body.rcToken || req.params.rcToken;

    if (!rcToken) {
      return res.status(400).json({ sucess: false, message: 'Missing reCAPTCHA token.' });
    }

    const valid = await isValid(rcToken);
    if (valid) {
      next();
    }
    else {
      return res.status(403).json({ sucess: false, message: 'reCAPTCHA failed.' });
    }
  }
  catch (err) {
    return res.status(500).json({ sucess: false, message: err.message });
  }
};

function isValid(token) {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        method: 'POST',
        form: {
          secret: process.env.RE_CAPTCHA_SECRET_KEY,
          response: token,
        },
      };

      request(
        'https://www.google.com/recaptcha/api/siteverify',
        options,
        function (error, response, body) {
          if (error) {
            throw error;
          }
          else if (response.statusCode !== 200) {
            throw new Error(response.statusMessage);
          }
          else {
            const result = JSON.parse(body);
            if (result.success) {
              resolve(result.score > MIN_SCORE);
            }
            else {
              const errorCodes = result['error-codes'];
              let errors = '';
              if (errorCodes) {
                errors = errorCodes.join(',');
              }
              reject(new Error(`Failed to verify reCAPTCHA. ${errors}`));
            }
          }
        },
      );
    }
    catch (error) {
      console.error(JSON.stringify(error, null, 2));
      reject(new Error('Failed to verify with reCAPTCHA.'));
    }
  });
}