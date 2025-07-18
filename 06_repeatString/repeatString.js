const repeatString = function (str, num) {
	let repeatedStr = "";

	//Negative numbers invalid -> returns an error string
	if (num < 0) {
		return "ERROR";
	}

	for (let i = 1; i <= num; i++) {
		repeatedStr += str;
	}

	return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
