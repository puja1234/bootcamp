var fs = require("fs");

// Asynchronous read
fs.readFile('inputtext.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous: " + data.toString().split(/\r*\n/).length);
});
console.log("END");
