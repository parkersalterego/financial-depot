const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const passport = require('passport');
const logger = require('morgan');
const fs = require('fs');
const app = express();
require('dotenv').config();

app.set("env", process.env.NODE_ENV || "development");
app.set("host", process.env.HOST || "0.0.0.0");
app.set("port", process.env.PORT || 8080);

// routes
const users = require('./routes/users');
const posts = require('./routes/posts');
const resources = require('./routes/resources');

app.use(logger('common', {
    stream: fs.createWriteStream('./access.log', {
        flags: 'a'
    })
}));
app.use(logger('dev'));

// cors middleware
app.use(cors());

// body parser middleware
app.use(bodyParser());

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// static folder
app.use(express.static(path.join(__dirname, 'public')));

// db connection
mongoose.connect(process.env.DATABASE);

mongoose.connection.on('connected', (req, res, next) => {
    console.log('Connected to database ' + process.env.DATABASE);
});

mongoose.connection.on('error', (err, next) => {
    console.log('Error connecting to database: ' + err);
    next(err);
});

// set route prefixes
app.use('/users', users);
app.use('/posts', posts);
app.use('/resources', resources);

// index route
app.get('/', (req, res, next) => {
    res.send('Invalid endpoint');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// dev error handler
// prints stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.code || 500)
            .json({
                status: 'error',
                message: err
            });
    });
}

// prod error handler
// no stack trace
app.use(function (err, req, res, next) {
    res.status(err.status || 500)
        .json({
            status: 'error',
            message: err.message
        });
});


// start server
app.listen(app.get("port"), function () {
    console.log('\n' + '*******************************');
    console.log('REST API listening on port ' + app.get("port"));
    console.log('*******************************' + '\n');
});

module.exports = app;