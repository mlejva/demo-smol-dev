const express = require('express');
const router = express.Router();

const shortenUrl = require('./shorten');
const redirectUrl = require('./redirect');

router.post('/shorten', shortenUrl);
router.get('/:shortUrl', redirectUrl);

module.exports = router;