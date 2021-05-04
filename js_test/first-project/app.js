var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const templateRouter = require('./routes/template');
// 세션 쓰게끔
const session = require("express-session");

var app = express();

app.use(session({
    secret : "first project", // 시크릿은 세션을 암호화하기 위해 하는 것, 임의로 작성 가능
    resave : false, // 세션을 변경하지 않아도 저장할지 말지를 정하는 것
    saveUninitialized :true, // 세션이 저장되기 전에 이를 초기화할지 말지 정하는 것
  })
);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   console.log("middle");
//   next();
// });


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/template', templateRouter);


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
