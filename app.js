const express = require("express"),
      app = express(),
      bodyParser = require("body-parser"),
      cors = require('cors')
      mysql = require('mysql');

// Routes
const departmentRoutes = require("./routes/departments");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'p56230101P',
    database: 'ClassStats'
})

connection.connect(err => {
    if(err){
        return err;
    } 
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname))

app.get("/", function(req,res){
    res.render("login");
})

app.get("/home", function(req,res){
    res.render("home");
})

var obj = {};
app.get("/departments", function(req,res){
    const SELECT_ALL_DEPARTMENTS_QUERY = "SELECT * FROM Department;";
    connection.query(SELECT_ALL_DEPARTMENTS_QUERY, (err,results) => {
        if(err){
            return res.send(err)
        } else {
            obj = {print: results};
            res.render('departments', obj)
        }
    });
});

app.use("/courses", departmentRoutes);


app.listen(process.env.PORT || 3000, function(){
    console.log("ClassStats Server has started...")
})