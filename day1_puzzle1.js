// gather input data and create an array having each line as its elements
document.body.getElementsByTagName('pre')[0].innerHTML.split('\n').map(
  // Convert elements to numbers
  l => Number.parseInt(l)
).filter(
  // Woops! Remove NaN's
  w=>!isNaN(w)
).reduce(
  // Reduce the array converting each module weight to its fuel value and sum all
  (acc, weight) => Math.floor(weight / 3) - 2 + acc, 0
);
