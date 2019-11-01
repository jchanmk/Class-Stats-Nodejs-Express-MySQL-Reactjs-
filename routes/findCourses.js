const express = require("express");
const router = express.Router();
const dbconfig = require("../config/database")
const mysql = require('mysql');

const connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);


// Show courses by that department
router.get("/:id", function (req, res) {
    console.log("in find department");

    // Similar to SQL Prepared Statement 
    const SELECT_ALL_COURSES_QUERY =
        "SELECT Name " +
        "FROM Courses " +
        "WHERE Courses.DeptID = (" +
        "SELECT DepartmentID " +
        "FROM Departments " +
        "WHERE Departments.name = ?" +
        ")";

    connection.query(SELECT_ALL_COURSES_QUERY, [req.params.id.toString()], (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            obj = { print: results };
            res.render('courses', obj)
            // console.log(results);
        }
    });
});

// Show Professors for a specific course
// router.get("/courses/:id", function (req, res) {
//     console.log("in the correct get method");
//     // Similar to SQL Prepared Statement 
//     const SELECT_ALL_PROFESSORS_QUERY =
//         "SELECT Lname " +
//         "FROM Instructors, Courses, Teaches " +
//         "WHERE Instructors.InstructorID = Teaches.InstructorID AND " +
//             "Courses.CouseID = (" +
//                 "SELECT CourseID " +
//                 "FROM Courses " +
//                 "WHERE Courses.name = ?" +
//             ")";

//     connection.query(SELECT_ALL_PROFESSORS_QUERY, [req.params.id.toString()], (err, results) => {
//         if (err) {
//             return res.send(err)
//         } else {
//             obj = { print: results };
//             res.render('instructors', obj)
//             // console.log(results);
//         }
//     });
// });


module.exports = router;