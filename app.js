const express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    cors = require('cors'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    passport = require('passport'),
    flash = require('connect-flash'),
    dbconfig = require('./config/database');

require('./config/passport')(passport);

// Routes
const findCourseRoutes = require("./routes/findCourses");
const indexRoutes = require("./routes");

// app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname));

app.use(session({
    secret: 'justasecret',
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(indexRoutes);
app.use("/findcourse", findCourseRoutes);


app.listen(process.env.PORT || 3000, function () {
    console.log("ClassStats Server has started...")
})

    // Ask celiia about hwo to record previous pathway/url
