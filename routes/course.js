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

    const SELECT_COURSENAME_QUERY =
        "SELECT Name, Lname " +
        "FROM Instructors, Courses " +
        "WHERE Instructors.InstructorID = ? AND " +
        "Courses.CourseID = ? ";

    connection.query(SELECT_COURSENAME_QUERY, [instructorID, courseID], (err, results) => {
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

router.get("/findratings", (req, res) => {
    // work on this include a call to the database and return some data
    console.log("in this API, react has made contact");
    const instructorID = req.query.instructorid;
    const courseID = req.query.courseid;
    const SELECT_ALL_RATINGS =
        "SELECT AVG(Rating) AS ClassEnjoyment, Useful/Count AS Useful, NotUseful/Count AS NotUseful " +
        "FROM Class_Enjoyment, Class_Usefulness " +
        "WHERE Class_Enjoyment.CourseID = Class_Usefulness.CourseID AND Class_Usefulness.CourseID = ? ";

    connection.query(SELECT_ALL_RATINGS, [courseID], (err, results) => {
        // console.log(results)
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results
            })
        }
    });
});

router.get('/addrating', (req, res) => {
    console.log(req.query.type);
    console.log(req.query.rating);
    console.log(req.query.courseid);
    const courseID = req.query.courseid;
    const type = req.query.type;
    const rating = req.query.rating;

    if (type === "Class_Enjoyment") {
        const INSERT_INTO_RATINGS =
            "INSERT INTO Class_Enjoyment (CourseID, Rating, StudentID)" +
            "VALUES (?, ?, '1234')";
        connection.query(INSERT_INTO_RATINGS, [courseID, rating], (err, results) => {
            if (err) {
                return res.send(err)
            } else {
                return res.send("succesfully added rating");
            }
        });
    }

})


module.exports = router;