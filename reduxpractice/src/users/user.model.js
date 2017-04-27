
let mongoose = require('mongoose');
let connection1 = require('../config/dataSource');

var userSchema = new mongoose.Schema({  //restrict the collection

    userName: {
        type : String,
        required : true,


    },

    email: {
        type : String
    }

});

module.exports = connection1.model('User', userSchema);

/*
module.exports = connection1.model('User',new mongoose.Schema({
    strict:false
}));*/
