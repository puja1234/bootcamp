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

        console.log(userData,'delete')
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


exports.updateUser = (userData,res) => {  //update user

    console.log(userData,'-------update user')
// res.status(400).send("error");
        User.update({"userName":userData.userName}, {email:userData.email},{upsert:true},(err, data) => {
            if (err) {
                res.status(400).send({message: "Error occured", error: err});
            } else {
                console.log('inside update',data);
                User.find((err,updatedData) => {
                    if(err){
                        res.status(400).send({message: "Error occured", error: err});
                    }else{

                        res.send(updatedData);
                    }
                })
            }
        })
}

