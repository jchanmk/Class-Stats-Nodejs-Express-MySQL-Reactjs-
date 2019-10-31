// the middlware
var middlewareObj = {};

middlewareObj.isLoggedIn = function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    // req.flash("error", "Please Login First!");
    res.redirect("/");
};


module.exports = middlewareObj;