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

let cback = function(a, b){
	console.log("just print ${a}, ${b}");
	return 0
}; 


let calc2 = function(num1, num2, callback){
	if (typeof callback === "function"){
			return callback(num1, num2);
	} else {
		return -1
	}
	
	};	

console.log(calc2(3, 4, add));
console.log(calc2(3, 4, multiply));
console.log(calc2(3, 4, cback));
console.log(calc2(2, 4, function (a, b){return a-b;}));
console.log(calc2(3, 4, "hi"));

var myArr =[{num: 5, 
	 str:'apple'
	 },
	{num: 7, 
	str:'cabbage'},
	{num: 1, 
	str:'ban'}
];

// if more than one function as "method" one can use
// multiplyGate.prototype = {
//  forward: function(u0, u1) {
//    // store pointers to input Units u0 and u1 and output unit utop
//    this.u0 = u0; 
// ...

myArr.sort(function(val1, val2) {
	if (val1.str > val2.str) {
		return -1;
	} else {
		return 1;
	}
});

console.log("---");
console.log(myArr);



let strbg = function(val1, val2) {
	if (val1.str > val2.str) {
		return -1;
	} else {
		return 1;
	}
}

let strlt = function(val1, val2) {
	if (val1.str < val2.str) {
		return -1;
	} else {
		return 1;
	}
}

let numbg = function(val1, val2) {
	if (val1.num > val2.num) {
		return -1;
	} else {
		return 1;
	}
}

console.log("numbg");
myArr.sort(numbg);
console.log(myArr);


console.log("strbg");
myArr.sort(strbg);
console.log(myArr);

// only the last one object is console log ...

console.log("strlt");
myArr.sort(strlt);
console.log(myArr);

// https://www.youtube.com/watch?v=xizFJHKHdHw&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf
// https://www.youtube.com/watch?v=xizFJHKHdHw&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf
// creator patterns
// jsfiddel use inspect under chrome

// safari mobile need to access mac and use safari setting developer then use 

var peopleFactory = function (name, age, state){

	// var temp = {}; // same as ... = new Object;
  var temp = new Object; // more clear actaully even though {} is shorter;
  temp.age = age;
  temp.name = name;
  temp.state = state;
  
  temp. printPerson = function(){
  	console.log("this.name" + ":" + this.name + "; " + // this refer to temp
    			      "this.age" + ":" + this.age + "; " +
    			      "this.state" + ":" + this.state + "; " );
  }
  
  return temp;
}

var person1 = peopleFactory("Dennis", 56, "North Point");
var person2 = peopleFactory("Mimi", 16, "Shatin");

person1.printPerson();
person2.printPerson();

// more similar to Java

var pFactory = function (name, age, state){

  //	// var temp = {}; // same as ... = new Object;
  // var temp = new Object; // more clear actaully even though {} is shorter;
  this.age = age;
  this.name = name;
  this.state = state;
  
  this.pPerson = function(){
  	console.log("this.name" + ":" + this.name + "; " + // this refer to temp
    			      "this.age" + ":" + this.age + "; " +
    			      "this.state" + ":" + this.state + "; " );
  }
  
  // return temp;
}

var person3 = new pFactory("DennisP", 561, "North Point2");
var person4 = new pFactory("MimiP", 161, "Shatin2");

person3.pPerson();
person4.pPerson();

// above the printPersion and pPreson in all this function in the obj ...!!!
// use prototype that use a share 
	
var peopleProto = function (){
};
peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.state = "no state";
peopleProto.prototype.pPerson2 = function(){
  	console.log("this.name" + ":" + this.name + "; " + // this refer to temp
    			      "this.age" + ":" + this.age + "; " +
    			      "this.state" + ":" + this.state + "; " );
};

var person5 = new peopleProto(); // all above is empty
person5.name = "Dennis5";
person5.age = 255;
person5.state = "state5";
person5.pPerson2(); 

var person6 = new peopleProto(); // all above is empty
person6.pPerson2();  /// very light weight
  
console.dir(peopleProto);
console.log("age" in person5);
console.log("xyz" in person5);
console.log(person5.hasOwnProperty("name")); //
console.log("age" in person6);
console.log("xyz" in person6); // not even prototype
console.log(person6.hasOwnProperty("name")); // not really have a name

// dynamic prototype patten to avoid 

var peopleDynamicProto = function (age, name, state){

	this.age = age;
	this.name = name;
	this.state = state;
	
	if (typeof this.pPerson3 !== "function"){ // only create one time
		peopleDynamicProto.prototype.pPerson3 = function(){
  			console.log( 	"this.name" + ":" + this.name + "; " + // this refer to temp
    			     	 	"this.age" + ":" + this.age + "; " +
    			      		"this.state" + ":" + this.state + "; " );
    	};
    };
};

var person7 = new peopleDynamicProto('Dennis7', 27, 'state7'); // cleaner
person7.pPerson3(); 
 
console.dir(peopleDynamicProto);
console.log("age" in person7);
console.log("xyz" in person7);
console.log(person7.hasOwnProperty("name")); // now got this

// https://www.youtube.com/watch?v=71AtaJpJHw0&index=2&list=PL7pEw9n3GkoW5bYOhVAtmJlak3ZK7SaDf
// closure

var addTo = function (passed) {
	var inner = 2;
	return passed + inner;
};

var passed = 3;

var addTo3 = function (passed) { // js lexical scoping 
	var add = function(inner){
		return passed + inner;
	};
	return add;
};

console.dir(addTo3(3));

var addThree = new addTo3(3);
var addFour  = new addTo3(4);

console.dir(addThree);
console.dir(addFour);

console.log(addThree());
console.log(addFour());
console.log(addThree());
console.log(addFour());




