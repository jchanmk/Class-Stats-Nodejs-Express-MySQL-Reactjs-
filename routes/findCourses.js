const express = require("express");
const router = express.Router();
const dbconfig = require("../config/database")
const mysql = require('mysql');
const middleware = require("../middleware");

// const connection = mysql.createConnection(dbconfig.connection);
// connection.query('USE ' + dbconfig.database);

const pool = mysql.createPool(dbconfig.connection);




// Show courses by that department
router.get("/:department", middleware.isLoggedIn, function (req, res) {
    var departmentName = req.params.department.toString();

    // Similar to SQL Prepared Statement 
    const SELECT_ALL_COURSES_QUERY =
        "SELECT DISTINCT Courses.Name, Departments.Name AS Department " +
        "FROM Courses, Departments " +
        "WHERE Courses.DeptID = (" +
        "SELECT DepartmentID " +
        "FROM Departments " +
        "WHERE Departments.name = ?" +
        ") AND Departments.Name = ?";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_ALL_COURSES_QUERY, [departmentName, departmentName], (err, results) => {
            console.log(pool._freeConnections.indexOf(connection)); // -1
            connection.release();
            console.log(pool._freeConnections.indexOf(connection)); // 0
            
            if (err) {
                return res.send(err)
            } else {
                obj = {
                    print: results,
                    user: req.user
                };
                res.render('courses', obj)
            }
        });
    });
});

// Show Professors for a specific course
router.get("/:department/:course", middleware.isLoggedIn, function (req, res) {
    console.log("in show professors")
    console.log(req.params);

    var courseName = req.params.course.toString();

    // Similar to SQL Prepared Statement

    const SELECT_ALL_PROFESSORS_QUERY =
        "SELECT Instructors.InstructorID, Lname, Courses.CourseID " +
        "FROM Instructors, Courses, Teaches " +
        "WHERE Instructors.InstructorID = Teaches.InstructorID AND " +
        "Teaches.CourseID = Courses.CourseID AND " +
        "Courses.Name = ? ";

    pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query(SELECT_ALL_PROFESSORS_QUERY, [courseName], (err, results) => {
            connection.release();
            if (err) {
                console.log(err);
                return res.send(err)
            } else {
                console.log(results);
                obj = {
                    print: results,
                    user: req.user
                };
                res.render('instructors', obj)
            }
        });
    });
});


module.exports = router;