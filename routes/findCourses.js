const express = require("express");
const router = express.Router();
const dbconfig = require("../config/database")
const mysql = require('mysql');
const middleware = require("../middleware");

const connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);


// Show courses by that department
router.get("/:department", middleware.isLoggedIn, function (req, res) {
    // console.log(req.params);

    // Similar to SQL Prepared Statement 
    const SELECT_ALL_COURSES_QUERY =
    "SELECT Courses.Name, Departments.Name AS Department " +
        "FROM Courses, Departments " +
        "WHERE Courses.DeptID = (" +
            "SELECT DepartmentID " +
            "FROM Departments " +
            "WHERE Departments.name = ?" +
        ") AND Departments.Name = ?";    
    // "SELECT Name " +
        // "FROM Courses " +
        // "WHERE Courses.DeptID = (" +
        //     "SELECT DepartmentID " +
        //     "FROM Departments " +
        //     "WHERE Departments.name = ?" +
        // ")";

    connection.query(SELECT_ALL_COURSES_QUERY, [req.params.department.toString(), req.params.department.toString()], (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            obj = { print: results };
            // console.log(results);
      
            res.render('courses', obj)
            // console.log(results);
        }
    });
});

// Show Professors for a specific course
router.get("/:department/:course", middleware.isLoggedIn, function (req, res) {
    // console.log(req.params);
    // Similar to SQL Prepared Statement 

    // Note: may need to manipulate this query to make sure the previous pathways are recorded
    // Ask celia about how to record previous pathway/url
    const SELECT_ALL_PROFESSORS_QUERY =
        "SELECT Instructors.InstructorID, Lname, Courses.CourseID " +
        "FROM Instructors, Courses, Teaches " +
        "WHERE Instructors.InstructorID = Teaches.InstructorID AND " +
            "Courses.CourseID = (" +
                "SELECT CourseID " +
                "FROM Courses " +
                "WHERE Courses.name = ?" +
            ")";

    connection.query(SELECT_ALL_PROFESSORS_QUERY, [req.params.course.toString()], (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            obj = { print: results };
            res.render('instructors', obj)
        }
    });
});


module.exports = router;