const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post('/email', async (req, res) => {
  setTimeout(() => {
    res.status(200).send({});
  }, 500);
  // try {
  //   const { name, email, message } = req.body;
  //   if (!name) return res.status(400).json({ message: 'Missing argument "name".' });
  //   if (!email) return res.status(400).json({ message: 'Missing argument "email".' });
  //   if (!message) return res.status(400).json({ message: 'Missing argument "message".' });

  //   const msg = {
  //     to: 'danielsosa.uy@gmail.com',
  //     from: 'danielsosa.uy@gmail.com',
  //     subject: 'Contact from danielsosa.uy',
  //     text: `
  //     From: ${name}.
  //     Email: ${email}
  //     Message: ${message}
  //     `,
  //     html: `
  //     <p>From: <strong>${name}</strong></p>
  //     <p>Email: <strong>${email}</strong></p>
  //     <p>Message: <strong>${message}</strong></p>
  //     `,
  //   };
  //   await sgMail.send(msg);
  //   res.status(200).send({ message: 'Message sent.' });
  // }
  // catch (error) {
  //   console.error(JSON.stringify(error, null, 2));
  //   res.status(500).json({ message: error.message });
  // }
});

module.exports = router;
