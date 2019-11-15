const express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    middleware = require("../middleware"),
    mysql = require('mysql'),
    dbconfig = require('../config/database');

const connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

router.get('/', (req, res) => {
    console.log(req.query.type);
    // console.log(req.query.rating);
    // console.log(req.query.courseid);
    const courseID = req.query.courseid;
    const type = req.query.type;
    const rating = req.query.rating;
    if (type === "classEnjoyment") {
        return res.send(addClassEnjoyment(courseID, rating));
    } else if (type === "classUsefulness") {
        return res.send(addClassUsefulness(courseID, rating));
    } else if (type === "examDifficulty") {
        return res.send(addExamDifficulty(courseID, rating));
    } else if (type === "attendanceAttn") {
        return res.send(addAttendanceAttn(courseID, rating));
    } else if (type === "profRating") {
        return res.send(addProfRating(courseID, rating));
    } else if (type === "classDifficulty") {
        return res.send(addClassDifficulty(courseID, rating));
    } else if (type === "testHeavy") {
        return res.send(addTestHeavy(courseID, rating));
    } else if (type === "classType") {
        return res.send(addClassType(courseID, rating));
    } 
})

function addClassEnjoyment(courseID, rating) {
    const INSERT_INTO_ClASS_ENJOYMENT =
        "UPDATE Class_Enjoyment " + 
        "SET Rating = Rating + ?, Count = Count + 1 " +
        "WHERE CourseID = ? "
    connection.query(INSERT_INTO_ClASS_ENJOYMENT, [rating, courseID], (err, results) => {
        if (err) {
            return err
        } else {
            return results;
        }
    });
}

function addProfRating(courseID, rating) {
    const INSERT_INTO_ClASS_ENJOYMENT =
        "UPDATE Prof_Rating " + 
        "SET Rating = Rating + ?, Count = Count + 1 " +
        "WHERE CourseID = ? "
    connection.query(INSERT_INTO_ClASS_ENJOYMENT, [rating, courseID], (err, results) => {
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

function addClassType(courseID, rating) {
    var UPDATE_CLASS_TYPE = "";
    if (rating == 1) {
        UPDATE_CLASS_TYPE =
            "UPDATE Class_Type " +
            "SET Lecture = Lecture + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    } else {
        UPDATE_CLASS_TYPE =
            "UPDATE Class_Type " +
            "SET Discussion = Discussion + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    }
    connection.query(UPDATE_CLASS_TYPE, [courseID], (err, results) => {
        if (err) {
            return err
        } else {
            return "succesfully added rating";
        }
    });
}

function addTestHeavy(courseID, rating) {
    var UPDATE_TEST_HEAVY = "";
    if (rating == 1) {
        UPDATE_TEST_HEAVY =
            "UPDATE Test_Heavy " +
            "SET Light = Light + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    } else {
        UPDATE_TEST_HEAVY =
            "UPDATE Test_Heavy " +
            "SET Heavy = Heavy + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    }
    connection.query(UPDATE_TEST_HEAVY, [courseID], (err, results) => {
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
    } else if (rating == 0) {
        UPDATE_EXAM_DIFFICULTY =
            "UPDATE Exam_Difficulty " +
            "SET Medium = Medium + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    } else if (rating == -1) {
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

function addClassDifficulty(courseID, rating) {
    var UPDATE_CLASS_DIFFICULTY = "";
    if (rating == 1) {
        UPDATE_CLASS_DIFFICULTY =
            "UPDATE Class_Difficulty " +
            "SET Easy = Easy + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    } else if (rating == 0) {
        UPDATE_CLASS_DIFFICULTY =
            "UPDATE Class_Difficulty " +
            "SET Medium = Medium + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    } else if (rating == -1) {
        UPDATE_CLASS_DIFFICULTY =
            "UPDATE Class_Difficulty " +
            "SET Hard = Hard + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    }
    connection.query(UPDATE_CLASS_DIFFICULTY, [courseID], (err, results) => {
        if (err) {
            return err
        } else {
            return "succesfully added rating";
        }
    });
}

function addAttendanceAttn(courseID, rating) {
    var UPDATE_ATTENDANCE_ATTN = "";
    if (rating == 1) {
        UPDATE_ATTENDANCE_ATTN =
            "UPDATE Attendance_Attn " +
            "SET Inattentive = Inattentive + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    } else {
        UPDATE_ATTENDANCE_ATTN =
            "UPDATE Attendance_Attn " +
            "SET Attentive = Attentive + 1, Count = Count + 1 " +
            "WHERE CourseID = ? ";
    }
    connection.query(UPDATE_ATTENDANCE_ATTN, [courseID], (err, results) => {
        if (err) {
            return err
        } else {
            return "succesfully added rating";
        }
    });
}

module.exports = router;