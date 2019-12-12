// This file serves as a configuration for the database which allows for easy manipulation
// This is the only file that needs to be changed in order for the server to run with different
// databases

module.exports = {
    'connection':{
        connectionLimit:10,
        host:'localhost',
        user:'root',
        password:'',    // fill in your password here
        database:'ClassStats'
    }
}
