const add = function(a,b) {

  addition = a + b;
  return addition;
	
};

const subtract = function(a ,b) {

	return (a-b);
};

const sum = function(arr) {
  const sum = arr.reduce((total,num)=>{
    return total + num;
  },0)
	return sum;
};

const multiply = function(arr) {
  const product = arr.reduce((total,num)=>{
    return total * num;
  },1)
	return product;

};

const power = function(a,b) {
  return (a**b);
	
};

const factorial = function(num) {

  let total = 1;
  for(let i = 1 ; i <= num; i++){
    total *= i;
  }
  return total;
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
