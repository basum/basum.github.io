var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  return res.render('game');
});
router.get('/waterpipes', (req, res, next) => {
  return res.render('waterpipes');
});

module.exports = router;