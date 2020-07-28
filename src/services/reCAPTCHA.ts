export const verifyCaptcha = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (process.env.NODE_ENV === 'development') {
      resolve('FAKE_TOKEN');
    }

    try {
      const RE_CAPTCHA_SITE_KEY = process.env.RE_CAPTCHA_SITE_KEY as string;
      grecaptcha.ready(async function () {
        const token = await grecaptcha.execute(RE_CAPTCHA_SITE_KEY, { action: 'submit' });
        resolve(token);
      });
    }
    catch (error) {
      reject(error);
    }
  });
};
