function getAge(birthDate) {
                var today=new Date();
                var birthDate1= new Date(birthDate);
                if(birthDate1!="Invalid Date"){
                                             
    		var age = today.getFullYear() - birthDate1.getFullYear();
                var m = today.getMonth() - birthDate1.getMonth();
                  if( m < 0 || (m == 0 && today.getDate() < birthDate1.getDate())) {
                       age--;
}
          return age;
}
else{

    console.log("invalid date ,Correct date format is (YYYY/MM/DD)");   
}
}
module.exports.getAge =getAge; 
