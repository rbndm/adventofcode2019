/*
* This is the recursive function needed to calculate the fuel needed, including fuel's weight
* @param weightArr array containing the module weight for which we want to calculate the fuel needed to fly
*/
let fuel = (weightArr) => {
  // Calculates fuel for last array element
	let _fuel = Math.floor(weightArr[weightArr.length - 1] / 3) - 2;
  // If fuel needed is > 0, we push it to the array and call fuel() again
	if(_fuel > 0) {
		weightArr.push(_fuel);
		return fuel(weightArr);
	} else {
    // Otherwise, we reduce the array to sum all the fuel values, except the first element
    // because it is module's weight
		return weightArr.slice(1).reduce((accu, w) => accu + w, 0);
	}
}

// Gather input values
document.body.getElementsByTagName('pre')[0].innerHTML.split('\n').map(
  // Convert to numbers
  l => Number.parseInt(l)
).filter(
  // Remove NaN's
  w=>!isNaN(w)
).map(
  // Map each weight w in the array to fuel([w])
  w=>fuel([w])
).reduce(
  // Reduce the array to the sum of all fuel results
  (acc, weight) => acc + weight, 0
);
