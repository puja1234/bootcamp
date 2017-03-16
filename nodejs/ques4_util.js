function getAge(birthDate) {
    		var age;
    		var birth=birthDate.getFullYear();
                var year=new Date().getFullYear();
                    age=year-birth;
    		return age;
}
module.exports.getAge = getAge;

