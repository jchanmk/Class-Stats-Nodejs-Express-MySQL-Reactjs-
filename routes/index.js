const express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    middleware = require("../middleware"),
    mysql = require('mysql'),
    dbconfig = require('../config/database');

const connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

router.get("/", function (req, res) {
    res.render("login", { message: req.flash('loginMessage') });
})

router.post('/login', passport.authenticate('local-login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
}), function (req, res) {
    if (req.body.remember) {
        req.session.cookie.maxAge = 1000 * 60 * 3;
    } else {
        req.session.cookie.expires = false;
    }
    res.redirect('/');
})

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
}));

router.get('/home', middleware.isLoggedIn, function (req, res) {
    res.render('home', {
        user: req.user
    });
});

var obj = {};
router.get("/departments", middleware.isLoggedIn, function (req, res) {
    const SELECT_ALL_DEPARTMENTS_QUERY = "SELECT * FROM Departments;";
    connection.query(SELECT_ALL_DEPARTMENTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            obj = { print: results };
            res.render('departments', obj)
        }
    });
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
})


// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/');
// }

module.exports = router;