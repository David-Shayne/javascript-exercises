const convertToCelsius = function (fahrenheit) {
	(celcius = (fahrenheit - 32) * (5 / 9)), 1;
	return Math.round(celcius * 10) / 10;
};

const convertToFahrenheit = function (celcius) {
	(fahrenheit = celcius / (5 / 9) + 32), 1;
	return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
