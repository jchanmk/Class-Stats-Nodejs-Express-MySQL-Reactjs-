// this file sets up user authentication with Passport.js, hashes passwords and stores in database
// conducts several checks such as if the user is in the database, if the passwords match, etc. 

const LocalStrategy = require("passport-local").Strategy;

const mysql = require("mysql");
const bcrypt = require("bcrypt-nodejs");
const dbconfig = require("./database");

const pool = mysql.createPool(dbconfig.connection);

module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        // console.log("in serialize")
        done(null, user.Email);
    });

    passport.deserializeUser(function (email, done) {
        // console.log("in deserialize")
        pool.getConnection(function (err, connection) {
            if (err) throw err;
            connection.query("SELECT * FROM Students WHERE email = ? ", [email],
                function (err, rows) {
                    connection.release();
                    done(err, rows[0]);
                });
        })
    });

    passport.use(
        'local-signup',
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
            function (req, email, password, done) {
                pool.getConnection(function (err, connection) {
                    if (err) throw err;
                    connection.query("SELECT Password FROM Students WHERE Email = ? ",
                        [email], function (err, rows) {
                            connection.release();
                            if (err) {
                                console.log("something went wrong");
                                return done(err);
                            }
                            if (!rows.length) {   // if email was not found in database
                                return done(null, false, req.flash('loginMessage', 'You are not in the database'));
                            }
                            if (rows.length && rows[0].Password != null) {
                                return done(null, false, req.flash('loginMessage', 'You already have an account with us! Please login instead'));
                            } else {
                                const newUserMysql = {
                                    Email: email,
                                    password: bcrypt.hashSync(password, null, null)
                                };

                                const updateQuery = "UPDATE Students SET Password = ? WHERE Email = ?";

                                pool.getConnection(function (err, connection) {
                                    if (err) throw err;
                                    connection.query(updateQuery, [newUserMysql.password, newUserMysql.Email], function (err, rows) {
                                        // console.log(rows);
                                        // newUserMysql.id = rows.insertId;
                                        connection.release();
                                        return done(null, newUserMysql);
                                    });
                                })
                            }
                        })
                })
            }
        )
    );

    passport.use(
        'local-login',
        new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
            function (req, email, password, done) {
                pool.getConnection(function (err, connection) {
                    if (err) throw err;
                    connection.query("SELECT * FROM Students WHERE Email = ? ", [email],
                        function (err, rows) {
                            connection.release()
                            if (err) {
                                return done(err);
                            }
                            if (!rows.length) {
                                console.log("no user found");
                                return done(null, false, req.flash('loginMessage', 'No User Found'))
                            }
                            if (!bcrypt.compareSync(password, rows[0].Password)) {
                                console.log("wrong password");
                                return done(null, false, req.flash('loginMessage', 'Wrong Password'))
                            }
                            console.log("right password");
                            return done(null, rows[0]);
                        });
                })
            })
    );
};