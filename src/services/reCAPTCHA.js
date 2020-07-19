export const verifyCaptcha = async () => {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'development') {
      resolve('FAKE_TOKEN');
    }

    try {
      window.grecaptcha.ready(async function () {
        const token = await window.grecaptcha.execute(process.env.RE_CAPTCHA_SITE_KEY, { action: 'submit' });
        resolve(token);
      });
    }
    catch (error) {
      reject(error);
    }
  });
};
