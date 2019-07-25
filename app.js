var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./index');
var clientRouter = require('./routes/client_routes.js');
var eventRouter = require('./routes/event_routes.js');
var supplierRouter = require('./routes/supplier_routes.js');
var productRouter = require('./routes/product_routes.js');
var quoteRouter = require('./routes/quote_routes.js');
var flowerRouter = require('./routes/flower_routes.js');
var cateringRouter = require('./routes/catering_routes.js');
var entertainmentRouter = require('./routes/entertainment_routes.js');
var locationRouter = require('./routes/location_routes.js');

var app = express();
//ar router = express.Router();
//app.use(router)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(clientRouter);
app.use(eventRouter);
app.use(supplierRouter);
app.use(productRouter);
app.use(quoteRouter);
app.use(flowerRouter);
app.use(cateringRouter);
app.use(entertainmentRouter);
app.use(locationRouter);

app.get("/aa", (req, res) => {
  var a = {"a":"aa"}
  res.json(a)
})

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

// app.listen(3000, () => {
//   console.log("Server is up and listening on port 3000");
// })

module.exports = app;
