const express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    middleware = require("../middleware"),
    mysql = require('mysql'),
    dbconfig = require('../config/database');

// const connection = mysql.createConnection(dbconfig.connection);
// connection.query('USE ' + dbconfig.database);
const pool = mysql.createPool(dbconfig.connection);

// render login page
router.get("/", function (req, res) {
    if (req.user != null) {
        // console.log("you logged in arleady")
        // console.log(req.user)
        res.redirect("/home");
        return;
    }
    res.render("login", { message: req.flash('loginMessage') });
})

// post request to database, initialize cookie to remember user session, login based on email
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

// post request to database, signup user with new password
router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash: true
}));

// render home screen, shows classes that user is currently taking
router.get('/home', middleware.isLoggedIn, function (req, res) {
    const SELECT_ALL_COURSES =
        "SELECT CourseNum " +
        "FROM Takes, Students " +
        "WHERE Takes.StudentNum = Students.StudentID AND " +
        "Takes.StudentNum = ? ;";

    pool.getConnection(function (err, connection) {
        if (err) throw err;

        connection.query(SELECT_ALL_COURSES, [req.user.StudentID], (err, results) => {
            connection.release();
            if (err) {
                return res.send(err)
            } else {
                obj = {
                    user: req.user,
                    print: results
                };
                // res.render('departments', obj)
                res.render('home', obj);
            }
        });
    })
});

// Find all courses student is currently taking with SQL Prepared Statement
router.get('/home/:studentID', function (req, res) {
    var studentID = req.params.studentID;
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
        "SELECT CourseNum " +
        "FROM Takes " +
        "WHERE Semester = 'Fall 2019' AND StudentNum = ? ) ;";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_HOME_INFO, [studentID], (err, results) => {
            connection.release();
            console.log(results + " hi ");
            if (err) {
                console.log(err)
                return res.send(err)
            } else {
                return res.json({
                    data: results
                })
            }
        });
    })
});

// Renders data for popup asking student to rate a course they have taken in the past
router.get('/popup/:studentID', function (req, res) {
    var studentID = req.params.studentID;
    var semester = "Fall 2019"
    const SELECT_POPUP_INFO =
        "SELECT CourseID, Name, Lname " +
        "FROM Courses, Instructors " +
        "WHERE Courses.InstructorID = Instructors.InstructorID " +
        "AND Courses.CourseID = (" +
        "SELECT CourseNum " +
        "FROM Takes " +
        "WHERE Semester != ? AND StudentNum = ? " +
        "LIMIT 1);";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_POPUP_INFO, [semester, studentID], (err, results) => {
            connection.release();
            if (err) {
                console.log(err)
                return res.send(err)
            } else {
                return res.json({
                    data: results
                })
            }
        });
    })
});

// Show all departments in databse, render to HTML
var obj = {};
router.get("/departments", middleware.isLoggedIn, function (req, res) {
    const SELECT_ALL_DEPARTMENTS_QUERY = "SELECT * FROM Departments;";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_ALL_DEPARTMENTS_QUERY, (err, results) => {
            connection.release();
            if (err) {
                return res.send(err)
            } else {
                obj = {
                    print: results,
                    user: req.user
                };
                res.render('departments', obj)
            }
        });
    });
});

// Logout, remove cookie/session, render login screen
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
})

module.exports = router;