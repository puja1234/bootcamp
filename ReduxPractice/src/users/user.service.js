let User = require('./user.model');
exports.createUser = (userData,res) => {

    User.create(userData,(err,data) => {
        if(err){
            res.send("error occured in creating data");
        }

        if(data){

            res.send(data);
        }
    })

}

exports.getUser = (res) => {

    User.find({},(err,data) => {
        if(err){
            res.send("error occured in finding data");
        }

        if(data){

            res.send(data);
        }
    })

}

exports.getSpecificUser = (userData,res) => {

    User.find({userName:userData},(err,data) => {
        if(err){
            res.send("error occured in finding data");
        }

        if(data){

            res.send(data);
        }
    })

}

exports.deleteUser= (userData,res) => {


        User.deleteOne({"userName":userData},(err, data) => {
            if (err) {
                res.send(err);
            } else {
                User.find((err,updatedData) => {
                    if(err){

                    }else{

                        res.send(updatedData);
                    }
                })
            }
        })
}


