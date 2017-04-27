let bodyParser = require('body-parser');
let express = require('express');
let controller = require('../users/user.controller')

let app = express();

app.use(bodyParser());

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

app.post('/User',controller.createUser);

app.get('/User', controller.getUser);

app.delete('/User',controller.deleteUser);

app.listen(3200,function () {
    console.log("server running at 3200 port");
})

