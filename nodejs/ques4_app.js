function age(){

var util = require('./ques4_util.js');
var dates=process.argv[2];
console.log( 'your age is : ', util.getAge(dates));
}
age();
