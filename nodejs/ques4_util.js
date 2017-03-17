function getAge(birthDate) {
                var today=new Date();
                var birthDate1= new Date(birthDate);
         if(birthDate1!="Invalid Date"){
               if((today-birthDate1)<1 || (today.getDate()==birthDate1.getDate())&&(today.getMonth()==birthDate1.getMonth())&&(today.getFullYear()==birthDate1.getFullYear() )){
                            console.log("Invalid input");
                                 return 0;
                                   }else{
    		var age = today.getFullYear() - birthDate1.getFullYear();
                var m = today.getMonth() - birthDate1.getMonth();
                  if( m < 0 || (m == 0 && today.getDate() < birthDate1.getDate())) {
                       age--;
                                   }
          return age;
                             }
   }
else{

    console.log("invalid date ,Correct date format is (YYYY/MM/DD)");
    return 0;   
}
}
module.exports.getAge =getAge; 
