const reverseString = function (str) {
	let strArray = [...str];
	let reversedStr = [];

	for (let i = str.length - 1; i >= 0; i--) {
		//Get end character
		let char = strArray.pop();
		//Add it to beginning of new array
		reversedStr.push(char);
	}

	return reversedStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
