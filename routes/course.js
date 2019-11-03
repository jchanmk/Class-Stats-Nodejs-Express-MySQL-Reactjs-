const express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    middleware = require("../middleware"),
    mysql = require('mysql'),
    dbconfig = require('../config/database');

const connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);


// THIS NEEDS TO BE REACTJS. LOOK INTO IT SOON

router.get("/", function (req, res) {
    var instructorID = req.query.instructorid;
    var courseID = req.query.courseid;
    // console.log(instructorID);
    // console.log(courseID);

    const SELECT_ALL_RATINGS_QUERY =
        "SELECT Name, Lname " +
        "FROM Instructors, Courses " +
        "WHERE Instructors.InstructorID = ? AND " +
            "Courses.CourseID = ? ";

    connection.query(SELECT_ALL_RATINGS_QUERY, [instructorID, courseID], (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            obj = { classInfo: results };
            console.log(obj);
            req.next;
            res.render('courseRatings', obj)
        }
    });
})

router.get("/findratings", (req, res) =>{
    // work on this include a call to the database and return some data
    console.log("in this API, react has made contact");
    console.log("query params = " + req.query.instructorid);
})



module.exports = router;