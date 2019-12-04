// Check if user session is initiated and if it matches cookie 
// middleware to check if user has logged in before and session didn't expire
// if user is logged in, do next thing, otherwise render login screen

var middlewareObj = {};

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("loginMessage", "Please Login First!");
    res.redirect("/");
};


module.exports = middlewareObj;