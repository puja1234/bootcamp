function getMinutes(milliseconds) {
    		var min;
    		min = Math.round(milliseconds / 60000);
    		return min;
}
module.exports.getMinutes = getMinutes;
