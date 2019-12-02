const express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    middleware = require("../middleware"),
    mysql = require('mysql'),
    dbconfig = require('../config/database');

// const connection = mysql.createConnection(dbconfig.connection);
// connection.query('USE ' + dbconfig.database);
const pool = mysql.createPool(dbconfig.connection);


const addRatingRoute = require("./addRatings");

router.get("/", middleware.isLoggedIn, function (req, res) {
    var instructorID = req.query.instructorid;
    var courseID = req.query.courseid;
    const SELECT_COURSENAME_QUERY =
        "SELECT Name, Lname " +
        "FROM Instructors, Courses " +
        "WHERE Instructors.InstructorID = ? AND " +
        "Courses.CourseID = ? ;";
    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_COURSENAME_QUERY, [instructorID, courseID], (err, results) => {
            connection.release();
            if (err) {
                return res.send(err)
            } else {
                obj = {
                    user: req.user,
                    classInfo: results
                };
                req.next;
                res.render('courseRatings', obj)
            }
        });
    });
})

router.get("/findratings1", (req, res) => {
    console.log("1. in here")
    const courseID = req.query.courseid;
    const SELECT_ALL_RATINGS =
        "SELECT Rating/Class_Enjoyment.Count AS ClassEnjoyment, " +
        "Useful/Class_Usefulness.Count AS Useful, " +
        "NotUseful/Class_Usefulness.Count AS NotUseful " +
        "FROM Class_Enjoyment, Class_Usefulness " +
        "WHERE Class_Enjoyment.CourseID = Class_Usefulness.CourseID AND Class_Usefulness.CourseID = ? ;";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_ALL_RATINGS, [courseID], (err, results) => {
            console.log(pool._freeConnections.indexOf(connection)); // -1
            connection.release();
            console.log(pool._freeConnections.indexOf(connection)); // -1

            // console.log(results)
            if (err) {
                console.log("ERROR IN SQL: " + err)
                return res.send(err)
            } else {
                return res.json({
                    data: results,
                    courseID: courseID
                })
            }
        });
    });
});

router.get("/findratings2", (req, res) => {
    console.log("2. in here")

    const instructorID = req.query.instructorid;
    const courseID = req.query.courseid;
    const SELECT_ALL_RATINGS =
        "SELECT Easy/Exam_Difficulty.Count AS Easy, " +
        "Medium/Exam_Difficulty.Count AS Medium, " +
        "Hard/Exam_Difficulty.Count AS Hard, " +
        "Inattentive/Attendance_Attn.Count AS Inattentive, " +
        "Attentive/Attendance_Attn.Count AS Attentive " +
        "FROM Exam_Difficulty, Attendance_Attn " +
        "WHERE Exam_Difficulty.CourseID = Attendance_Attn.CourseID " +
        "AND Attendance_Attn.CourseID = ? ;";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_ALL_RATINGS, [courseID], (err, results) => {
            console.log(pool._freeConnections.indexOf(connection)); // -1
            connection.release();
            console.log(pool._freeConnections.indexOf(connection)); // -1

            if (err) {
                console.log("ERROR IN SQL: " + err)

                return res.send(err)
            } else {
                return res.json({
                    data: results,
                    courseID: courseID
                })
            }
        });
    });
});

router.get("/findratings3", (req, res) => {
    console.log("3. in here")

    const instructorID = req.query.instructorid;
    const courseID = req.query.courseid;
    const SELECT_ALL_RATINGS =
        "SELECT Rating/Prof_Rating.Count AS ProfRating, " +
        "Easy/Class_Difficulty.Count AS Easy, " +
        "Medium/Class_Difficulty.Count AS Medium, " +
        "Hard/Class_Difficulty.Count AS Hard " +
        "FROM Prof_Rating, Class_Difficulty " +
        "WHERE Prof_Rating.CourseID = Class_Difficulty.CourseID " +
        "AND Prof_Rating.CourseID = ? ;";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_ALL_RATINGS, [courseID], (err, results) => {
            console.log(pool._freeConnections.indexOf(connection)); // -1
            connection.release();
            console.log(pool._freeConnections.indexOf(connection)); // -1

            if (err) {
                console.log("ERROR IN SQL: " + err)

                return res.send(err)
            } else {
                return res.json({
                    data: results,
                    courseID: courseID
                })
            }
        });
    });
});

router.get("/findratings4", (req, res) => {
    console.log("4. in here")

    const instructorID = req.query.instructorid;
    const courseID = req.query.courseid;
    const SELECT_ALL_RATINGS =
        "SELECT Light/Test_Heavy.Count AS Light, Heavy/Test_Heavy.Count AS Heavy, " +
        "Lecture/Class_Type.Count AS Lecture, Discussion/Class_Type.Count AS Discussion " +
        "FROM Test_Heavy, Class_Type " +
        "WHERE Test_Heavy.CourseID = Class_Type.CourseID " +
        "AND Class_Type.CourseID = ? ;";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_ALL_RATINGS, [courseID], (err, results) => {
            console.log(pool._freeConnections.indexOf(connection)); // -1

            connection.release();
            console.log(pool._freeConnections.indexOf(connection)); // -1

            // console.log(results)
            if (err) {
                console.log("ERROR IN SQL: " + err)

                return res.send(err)
            } else {
                return res.json({
                    data: results,
                    courseID: courseID
                })
            }
        });
    })
});

router.get("/findratings5", (req, res) => {
    console.log("5. in here")

    const instructorID = req.query.instructorid;
    const courseID = req.query.courseid;
    const SELECT_ALL_RATINGS =
        "SELECT Light/Homework_Load.Count AS Light, Heavy/Homework_Load.Count AS Heavy, " +
        "Yes/Prof_Approach.Count AS Yes, No/Prof_Approach.Count AS No " +
        "FROM Homework_Load, Prof_Approach " +
        "WHERE Homework_Load.CourseID = Prof_Approach.CourseID " +
        "AND Prof_Approach.CourseID = ? ;";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_ALL_RATINGS, [courseID], (err, results) => {
            console.log(pool._freeConnections.indexOf(connection)); // -1

            connection.release();
            console.log(pool._freeConnections.indexOf(connection)); // -1

            if (err) {
                console.log("ERROR IN SQL: " + err)

                return res.send(err)
            } else {
                return res.json({
                    data: results,
                    courseID: courseID
                })
            }
        });
    });
});

router.use("/addrating", addRatingRoute);


module.exports = router;