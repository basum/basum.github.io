var express = require('express');
var router = express.Router();
var qrcode = require('qrcode');

var website = "https://web-ar-nov.herokuapp.com/qr/decode";

router.get('/', (req, res, next) => {
    const score = req.query.score;
    var l = website;
    l = l + "?date=" + Date.now();
    l = l + "&score=" + score;
    qrcode.toDataURL(l, (err, src) => {
        return res.render('qrshow', { "qr": src });
    });
});

router.get('/decode', (req, res, next) => {
    const { date, score } = req.query;
    res.render("showscore", {
        "date": new Date(parseInt(date)),
        "score": score
    });
});

module.exports = router;