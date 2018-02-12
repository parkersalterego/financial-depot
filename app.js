const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const config = require('./config/database');
const passport = require('passport');

const app = express();

// routes
const users = require('./routes/users');
const posts = require('./routes/posts');
const resources = require('./routes/resources');

// port
const port = 3000;

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
mongoose.connect(config.database);

mongoose.connection.on('connected', (req, res, next) => {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Error connecting to database: ' + err);
});

// set route prefixes
app.use('/users', users);
app.use('/posts', posts);
app.use('/resources', resources);

app.use(
    function (err, req, res, next) { 
        console.log(err.message);
        res.status(422).send({error: err.message});
    }
);

// index route
app.get('/', (req, res, next) => {
    res.send('Invalid endpoint');
});

// start server
app.listen(port, () => {
    console.log('Connected on port ' + port);
});