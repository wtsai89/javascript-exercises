const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => total + curr,0);
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => total * curr,1);
};

const power = function(x,y) {
  let result = 1;
	for (let i = 0; i < y; i++) {
    result *= x;
  }
  return result;
};

const factorial = function(x) {
	let result = 1;
	for (let i = 1; i <= x; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
