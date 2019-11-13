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

router.get("/findratings1", (req, res) => {
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
                data: results,
                courseID: courseID
            })
        }
    });
});

router.get("/findratings2", (req, res) => {
    console.log("in this API, react has made contact");
    const instructorID = req.query.instructorid;
    const courseID = req.query.courseid;
    const SELECT_ALL_RATINGS =
        "SELECT Easy/Count AS Easy, Medium/Count AS Medium, Hard/Count AS Hard " +
        "FROM Exam_Difficulty " +
        "WHERE Exam_Difficulty.CourseID = ? ";

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


router.get('/addrating', (req, res) => {
    console.log(req.query.type);
    console.log(req.query.rating);
    console.log(req.query.courseid);
    const courseID = req.query.courseid;
    const type = req.query.type;
    const rating = req.query.rating;
    if (type === "classEnjoyment") {
        return res.send(addClassEnjoyment(courseID, rating));
    } else if (type === "classUsefulness") {
        return res.send(addClassUsefulness(courseID, rating));
    } else if (type === "examDifficulty") {
        return res.send(addExamDifficulty(courseID, rating));
    }

})

function addClassEnjoyment(courseID, rating) {
    const INSERT_INTO_ClASS_ENJOYMENT =
        "INSERT INTO Class_Enjoyment (CourseID, Rating, StudentID)" +
        "VALUES (?, ?, '1234')";
    connection.query(INSERT_INTO_ClASS_ENJOYMENT, [courseID, rating], (err, results) => {
        if (err) {
            return err
        } else {
            return "succesfully added rating";
        }
    });
}

function addClassUsefulness(courseID, rating) {
    var UPDATE_CLASS_USEFULNESS = "";
    if (rating == 1) {
        UPDATE_CLASS_USEFULNESS =
            "UPDATE Class_Usefulness " +
            "SET Useful = Useful + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    } else {
        UPDATE_CLASS_USEFULNESS =
            "UPDATE Class_Usefulness " +
            "SET NotUseful = NotUseful + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    }
    connection.query(UPDATE_CLASS_USEFULNESS, [courseID], (err, results) => {
        if (err) {
            return err
        } else {
            return "succesfully added rating";
        }
    });
}

function addExamDifficulty(courseID, rating) {
    var UPDATE_EXAM_DIFFICULTY = "";
    if (rating == 1) {
        UPDATE_EXAM_DIFFICULTY =
            "UPDATE Exam_Difficulty " +
            "SET Easy = Easy + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    } else if (rating == 0){
        UPDATE_EXAM_DIFFICULTY =
            "UPDATE Exam_Difficulty " +
            "SET Medium = Medium + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    } else if (rating == -1){
        UPDATE_EXAM_DIFFICULTY =
            "UPDATE Exam_Difficulty " +
            "SET Hard = Hard + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    }
    connection.query(UPDATE_EXAM_DIFFICULTY, [courseID], (err, results) => {
        if (err) {
            return err
        } else {
            return "succesfully added rating";
        }
    });
}

module.exports = router;