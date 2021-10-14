var express = require('express');
var router = express.Router();

const Score = require('../models/Scores');

router.get('/', (req, res, next) => {
  let s = req.query.score; 
  Score.find({}, (err, scores) => {
    ss =[];
    scores.forEach((score, index) => {
      var s = {
        id: '' + score._id,
        email: score.email,
        fullname: score.fullname,
        score: score.score
      }
      ss.push(s);
    });
    return res.render('submit', { scores: ss, score: s});
  });
});

router.post('/', (req, res, next) => {
  const { email, fullname, score } = req.body;

  const s = new Score({
    email: email,
    fullname: fullname,
    score: score
  });
  s.save().then((data) => {
    return res.redirect('/submit');
  }).catch((error) => {
    console.error(error);
  });
});

module.exports = router;