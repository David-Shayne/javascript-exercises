//Get location of the argument in the array
//Splice to delete that argument from the array as index of the argument

function getAllIndexes(arr, item) {
	arr = [...arr];
	let currentIndex = 0;
	let indexList = [];

	while (true) {
		currentIndex = arr.indexOf(item, currentIndex);

		if (currentIndex !== -1) {
			indexList.push(currentIndex);
			currentIndex += 1;
		} else {
			break;
		}
	}

	return indexList;
}

const removeFromArray = function (arr, ...removals) {
	let removalIndexes = [];

	for (let i = 0; i <= removals.length; i++) {
		//Check to see if the removal item is actually in the array
		if (arr.includes(removals[i])) {
			//Get all the indexes of the removal item that show up in the array
			removalIndexes = getAllIndexes(arr, removals[i]);

			//If more than one occurance, iterate and remove each occurance
			if (removalIndexes.length > 1) {
				let removalCount = 0;
				for (removalIndex of removalIndexes) {
					//Need to lower next index to remove by 1 for each removal (shifts array down each time)
					arr.splice(removalIndex - removalCount, 1);
					removalCount++;
				}
			} else {
				arr.splice(removalIndexes, 1);
			}
		}
	}

	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
