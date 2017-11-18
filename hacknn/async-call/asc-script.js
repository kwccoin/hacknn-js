addEventListener('load', function(e) {
  document.querySelector('#asc-id').innerHTML = 'asc-script.js';
});

// based on this : https://www.youtube.com/watch?v=pTbSfCT42_M

var author = "KWCC Coin";
console.log("Javsscript Async call : The Student is " + author);

let x1 = function () {
	console.log("I am x1 in a function y");
};

let x2 = function () {
	console.log("I am x1 in a function y");
};


let y = function (callback) {
	console.log("in y try to call any incoming function");
	callback();
};

y(x1);
y(x2);



let calc = function(num1, num2, calcType){
	if (calcType === "add") {
		return num1+num2;
	} else if (calcType === "multiply"){
		return num1*num2;
	};	
};

console.log(calc(2, 3, 'add'));
console.log(calc(2, 3, 'multiply'));

let add = function(a, b){
	return a+b;
};

let multiply = function(a, b){
	return a*b;
};


let calc2 = function(num1, num2, callback){
	return callback(num1, num2);
	};	

console.log(calc2(3, 4, add));
console.log(calc2(3, 4, multiply));
