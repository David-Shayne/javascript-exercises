//Take in two positive inegers
//Get an array of all integers between them (including them)
//For loop starting at lower integer then ending at higher integer
//Each occurance multiplies the previous total by the current integer

const sumAll = function (int1, int2) {
	let sum = 0;

	//Checks arguments are whole numbers
	for (arg of [int1, int2]) {
		if (!Number.isInteger(arg) || arg < 0) {
			return "ERROR";
		}
	}

	let maxInt = Math.max(int1, int2);
	let minInt = Math.min(int1, int2);

	for (let i = minInt; i <= maxInt; i++) {
		sum += i;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
