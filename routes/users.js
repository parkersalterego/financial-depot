const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');


const User = require('../models/user');

//get users
router.get('/', (req, res, next) => {
    res.send('USERS');

});

// register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password

    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: 'Failed to register user'});

        } else {
            res.json({success: true, msg: 'User registered'});

        }
    });
});

// Authenticate

router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        if (err) {
            res.send(err);

        }
        if (!user) {
            return res.json({success: false, msg: 'User not found'});

        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) {
                res.send(err);

            }

            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week

                });

                res.json({
                    success: true,
                    token: 'Bearer ' + token,
                    user: {
                        id: user._id,
                        username: user.username,
                        email: user.email

                    }
                });
            } else {
                return res.json({success: false, msg: 'Incorrect password'});

            }
        });
    });
});


module.exports = router;