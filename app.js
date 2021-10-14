var createError = require('http-errors');
// const db = require('./helper/db')();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const exphbs = require('express-handlebars');

var errorRouter = require('./routes/error');
var gameRouter = require('./routes/game');
var indexRouter = require('./routes/index');
var submitRouter = require('./routes/submit');
var qrRouter = require('./routes/qrgenerator');
var infoboxRouter = require('./routes/infobox');
var gameoverRouter = require('./routes/gameover');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/error', errorRouter);
app.use('/game', gameRouter);
app.use('/submit', submitRouter);
app.use('/qr', qrRouter);
app.use('/info-box', infoboxRouter);
app.use('/gameover', gameoverRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  console.log(Object.keys(err));
  console.log(
    '\n\nError:\n--------------------------------------------------\n'
    + err.message
    + '\n--------------------------------------------------\n'
    + err.stack
    + '\n--------------------------------------------------\n'
  );
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  if (err.status == 404)
    res.redirect('/error');
  else
    res.render('error');
});

module.exports = app;
