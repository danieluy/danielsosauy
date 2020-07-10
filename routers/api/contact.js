const express = require('express');
const router = express.Router();
const path = require('path');

router.post('/email', (req, res) => {
  res.status(200).send({ message: 'Lalala' });
});

module.exports = router;
