const express = require('express');
const router = express.Router();
const contact = require('./contact');

router.use('/contact', contact);

module.exports = router;