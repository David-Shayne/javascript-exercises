const leapYears = function (year) {
	let divisableByFour = year % 4 === 0;
	let divisableByHundred = year % 100 === 0;
	let divisableByFourHundred = year % 400 === 0;

	if (divisableByFour && (!divisableByHundred || divisableByFourHundred)) {
		return true;
	} else return false;
};

// Do not edit below this line
module.exports = leapYears;
