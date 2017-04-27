var bodyparser = require('body-parser');

let mongoose = require('mongoose');

module.exports = connection = mongoose.createConnection('mongodb://localhost/reduxUser');

connection.on('open',function () {
    console.log("connection done to reduxUser")
});

connection.on('error',function () {
    console.log("connection failed to reduxUser");
})