var fs = require("fs");

// Asynchronous read
fs.readFile('./inputtext.txt', function (err, data) {
   if (err) {
        
      return console.error(err+"hello");
   }
   console.log("Asynchronous: " +  (data.toString().split(/\r*\n/).length -1));
});
console.log("END");


