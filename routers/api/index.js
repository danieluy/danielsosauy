const express = require('express');
const router = express.Router();
const reCAPTCHA = require('../../middleware/reCAPTCHA');
const contact = require('./contact');

router.use('/contact', reCAPTCHA, contact);

module.exports = router;