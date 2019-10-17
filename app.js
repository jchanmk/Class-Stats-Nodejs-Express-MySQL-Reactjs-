const express = require("express"),
      app = express(),
      bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname))

app.get("/", function(req,res){
    res.render("login");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("ClassStats Server has started...")
})