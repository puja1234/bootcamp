var UserService = require('./user.service');

exports.createUser =(req,res,next) => {
    console.log("Creating user");
    var userData = req.body.data;
    UserService.createUser(userData,res);
}


exports.getUser =(req,res,next) => {
    console.log("Getting user");

    UserService.getUser(res);
}

exports.getSpecificUser=(req,res,next)=>{
    console.log("getting specific user");
    //var userData = req.param.data;
    UserService.getSpecificUser(res);
}

exports.deleteUser=(req,res,next)=>{
    console.log("deleting user",req.body.userName);
    var userData = req.body.userName;
    console.log(userData)
    UserService.deleteUser(userData,res);
}

exports.updateUser=(req,res,next)=>{
    console.log("updating user",req.body.userName);
    var userData = req.body;
    console.log(userData)
    UserService.updateUser(userData,res);
}

