/*
* This is the recursive function needed to calculate the fuel needed, including fuel's weight
* @param weight module weight for which we want to calculate the fuel needed to fly
*/
let fuel = (weight) => {
  // Calculates fuel for last array element
	let _fuel = Math.floor(weight / 3) - 2;
  // If fuel needed is > 0, we push it to the array and call fuel() again
	if(_fuel > 0) {
		return _fuel + fuel(_fuel);
	} else {
    // Otherwise, we reduce the array to sum all the fuel values, except the first element
    // because it is module's weight
		return 0;
	}
}

// Gather input values
document.body.getElementsByTagName('pre')[0].innerHTML.split('\n').map(
  // Convert to numbers
  l => Number.parseInt(l)
).filter(
  // Remove NaN's
  w=>!isNaN(w)
).reduce(
  // Reduce the array to the sum of all fuel results
  (acc, weight) => acc + fuel(weight), 0
);
