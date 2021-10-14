var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    const score = req.query.score;
    res.render('gameover', {"score": score});
});

module.exports = router;