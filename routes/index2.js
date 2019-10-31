// module.exports = function(app, passport){
//     app.get("/", function (req, res) {
//         res.render("login", { message: req.flash('loginMessage') });
//     })

//     app.post('/login', passport.authenticate('local-login', {
//         successRedirect: '/home',
//         failureRedirect: '/',
//         failureFlash: true
//     }), function (req, res) {
//         if (req.body.remember) {
//             req.session.cookie.maxAge = 1000 * 60 * 3;
//         } else {
//             req.session.cookie.expires = false;
//         }
//         res.redirect('/');
//     })

//     app.post('/signup', passport.authenticate('local-signup', {
//         successRedirect: '/home',
//         failureRedirect: '/',
//         failureFlash: true
//     }));

//     app.get('/home', isLoggedIn, function(req, res){
//         res.render('home',{
//             user: req.user
//         });
//     });

//     app.get('/logout', function(req, res){
//         req.logout();
//         res.redirect('/');
//     })
// };

// function isLoggedIn(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     res.redirect('/');
// }