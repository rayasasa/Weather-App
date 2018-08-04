//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var htmlIndexRoute = require('./routes/html');

var app = express();
app.listen(3010);
console.log("on 3010");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/pages')));


//app.use('/', indexRouter);
//app.use('/users', usersRouter);

app.use('/', function(req, res){
  p = path.join(__dirname, 'public/pages/index.html');
  res.sendFile(p);
  console.log(p);
});

app.use('/page2', function(req,res){
  p = path.join(__dirname, 'public/pages/page2.html');
  res.sendFile(p);
  console.log(p);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
