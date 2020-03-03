var _ = require('lodash');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('express-handlebars');
var indexRouter = require('./routes/index');
var propertyRouter = require('./routes/property');
var listingRouter = require('./routes/listing');
var roomRouter = require('./routes/room');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var handlebars = require('handlebars');
const {
    allowInsecurePrototypeAccess
} = require('@handlebars/allow-prototype-access');
var app = express();
app.engine('hbs', hbs({
    extname: '.hbs',
    // allowedProtoMethods: {
    //     trim: true
    // },
    handlebars: allowInsecurePrototypeAccess(handlebars),
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, '/views')
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/listing', listingRouter);
// app.use('/property', propertyRouter);
// app.use('/room', roomRouter);
// app.use('/about', aboutRouter);
// app.use('/contact', contactRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;


/*
 */