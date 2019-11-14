const express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    middleware = require("../middleware"),
    mysql = require('mysql'),
    dbconfig = require('../config/database');

const connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

const addRatingRoute = require("./addRatings");

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

router.get("/findratings1", (req, res) => {
    // console.log("in this API, react has made contact");
    const instructorID = req.query.instructorid;
    const courseID = req.query.courseid;
    const SELECT_ALL_RATINGS =
        "SELECT Rating/Class_Enjoyment.Count AS ClassEnjoyment, " +
        "Useful/Class_Usefulness.Count AS Useful, " +
        "NotUseful/Class_Usefulness.Count AS NotUseful " +
        "FROM Class_Enjoyment, Class_Usefulness " +
        "WHERE Class_Enjoyment.CourseID = Class_Usefulness.CourseID AND Class_Usefulness.CourseID = ? ";

    connection.query(SELECT_ALL_RATINGS, [courseID], (err, results) => {
        // console.log(results)
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results,
                courseID: courseID
            })
        }
    });
});

router.get("/findratings2", (req, res) => {
    // console.log("in this API, react has made contact");
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
        "AND Attendance_Attn.CourseID = ?";

    connection.query(SELECT_ALL_RATINGS, [courseID], (err, results) => {
        // console.log(results)
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results,
                courseID: courseID
            })
        }
    });
});

router.get("/findratings3", (req, res) => {
    console.log("in this API, react has made contact");
    const instructorID = req.query.instructorid;
    const courseID = req.query.courseid;
    const SELECT_ALL_RATINGS =
        "SELECT Rating/Prof_Rating.Count AS ProfRating, " + 
        "Easy/Class_Difficulty.Count AS Easy, " + 
        "Medium/Class_Difficulty.Count AS Medium, " +
        "Hard/Class_Difficulty.Count AS Hard " + 
        "FROM Prof_Rating, Class_Difficulty " + 
        "WHERE Prof_Rating.CourseID = Class_Difficulty.CourseID " + 
        "AND Prof_Rating.CourseID = ?";

    connection.query(SELECT_ALL_RATINGS, [courseID], (err, results) => {
        // console.log(results)
        if (err) {
            return res.send(err)
        } else {
            return res.json({
                data: results,
                courseID: courseID
            })
        }
    });
});

router.use("/addrating", addRatingRoute);


module.exports = router;