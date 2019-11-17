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

// commented this out for editing purposes
// router.get('/home', middleware.isLoggedIn, function (req, res) {
router.get('/home', function (req, res) {
    // console.log(req.user)
    const SELECT_ALL_COURSES =
        "SELECT CourseID " +
        "FROM Takes, Students " +
        "WHERE Takes.StudentID = Students.StudentID AND " +
        "Takes.StudentID = ? ";

    connection.query(SELECT_ALL_COURSES, [req.user.StudentID], (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            obj = {
                user: req.user,
                print: results
            };
            // res.render('departments', obj)
            console.log(obj)
            res.render('home', obj);
        }
    });
});

router.get('/home/:studentID', function (req, res) {
    var studentID = req.params.studentID;
    // console.log("made contact with react api " + studentID)
    const SELECT_HOME_INFO =
        "SELECT Name, Lname, Rating/Class_Enjoyment.Count AS ClassEnjoyment, " +
        "Easy/Class_Difficulty.Count AS Easy, Medium/Class_Difficulty.Count AS Medium, " +
        "Hard/Class_Difficulty.Count AS Hard, Useful/Class_Usefulness.Count AS Useful, " +
        "NotUseful/Class_Usefulness.Count AS NotUseful, Courses.CourseID, Courses.InstructorID " +  
        "FROM Courses, Instructors, Class_Enjoyment, Class_Difficulty, Class_Usefulness " + 
        "WHERE Instructors.InstructorID = Courses.InstructorID " +
            "AND Courses.CourseID = Class_Enjoyment.CourseID " +
            "AND Courses.CourseID = Class_Difficulty.CourseID " +
            "AND Courses.CourseID = Class_Usefulness.CourseID " +
            "AND Courses.CourseID IN( " +
                "SELECT CourseID " +
                "FROM Takes " +
                "WHERE Semester = 'Fall 2019' AND StudentID = ? )";

    connection.query(SELECT_HOME_INFO, [studentID], (err, results) => {
        if (err) {
            console.log(err)
            return res.send(err)
        } else {
            // res.render('departments', obj)
            // console.log(obj)
            // res.render('home', obj);
            // console.log(results)
            return res.json({
                data: results
            })
        }
    });
});

router.get('/popup/:studentID', function (req, res) {
    var studentID = req.params.studentID;
    console.log("made contact with react api " + studentID)
    const SELECT_POPUP_INFO = 
    "SELECT CourseID, Name, Lname " +
    "FROM Courses, Instructors " +
    "WHERE Courses.InstructorID = Instructors.InstructorID " +
    "AND Courses.CourseID = (" +
    "SELECT CourseID " +
    "FROM Takes " +
    "WHERE StudentID = ? " +
    "LIMIT 1)";

    connection.query(SELECT_POPUP_INFO, [studentID], (err, results) => {
        if (err) {
            console.log(err)
            return res.send(err)
        } else {
            console.log(results);
            return res.json({
                data: results
            })
        }
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