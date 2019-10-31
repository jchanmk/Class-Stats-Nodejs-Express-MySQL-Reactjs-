const express = require("express");
const router = express.Router();
const dbconfig = require("../config/database")
const mysql = require('mysql');

const connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);


// Show courses by that department
router.get("/:id", function(req, res){
        // Similar to SQL Prepared Statement 
        const SELECT_ALL_COURSES_QUERY = 
            "SELECT * " + 
            "FROM Courses " + 
            "WHERE Courses.DeptID = (" +
                "SELECT DepartmentID " +
                "FROM Department " + 
                "WHERE Department.name = ?" +
                ")";

        connection.query(SELECT_ALL_COURSES_QUERY, [req.params.id.toString()] ,(err,results) => {
            if(err){
                return res.send(err)
            } else {
                obj = {print: results};
                res.render('courses', obj)
                // console.log(results);
            }
        });
    });    
// });

module.exports = router;