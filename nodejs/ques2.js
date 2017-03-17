var fs = require("fs");


var fs = require('fs');
var buf = fs.readFileSync('./inputtext.txt');
console.log(buf.toString().split(/\r*\n/).length-1);
console.log("END");
