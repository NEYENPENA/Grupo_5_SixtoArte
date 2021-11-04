const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const recordame = require('./middlewares/cookieRecordame')
const logueado =require('./middlewares/logueado')

const main = require('./routes/main');
const user = require('./routes/user');
const product = require('./routes/product')
const admin = require('./routes/admin')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'shh es un secreto',
  resave: false,
  saveUninitialized: true
  }));
app.use(recordame)
app.use(logueado)


app.use('/', main);
app.use('/product', product)
app.use('/user', user);
app.use('/admin', admin)

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