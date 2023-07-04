const express = require('express');
const router = express.Router();
const Url = require('../models/url');

router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    let url = await Url.findOne({ longUrl });

    if (url) {
        res.json(url);
    } else {
        url = new Url({ longUrl });
        await url.save();
        res.json(url);
    }
});

module.exports = router;