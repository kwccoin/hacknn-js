// http://karpathy.github.io/neuralnets/

var forwardMultiplyGate = function(x, y) {
  return x * y;
};

forwardMultiplyGate(-2, 3); // returns -6. Exciting.

// circuit with single gate for now
var forwardMultiplyGate = function(x, y) { return x * y; };
var x = -2, y = 3; // some input values

// try changing x,y randomly small amounts and keep track of what works best
var tweak_amount = 0.01;
var best_out = -Infinity;
var best_x = x, best_y = y;
for(var k = 0; k < 100; k++) {
  var x_try = x + tweak_amount * (Math.random() * 2 - 1); // tweak x a bit
  var y_try = y + tweak_amount * (Math.random() * 2 - 1); // tweak y a bit
  var out = forwardMultiplyGate(x_try, y_try);
  if(out > best_out) {
    // best improvement yet! Keep track of the x and y
    best_out = out; 
    best_x = x_try, best_y = y_try;
  }
}

var x = -2, y = 3;
var out = forwardMultiplyGate(x, y); // -6
var h = 0.0001;

// compute derivative with respect to x
var xph = x + h; // -1.9999
var out2 = forwardMultiplyGate(xph, y); // -5.9997
var x_derivative = (out2 - out) / h; // 3.0

// compute derivative with respect to y
var yph = y + h; // 3.0001
var out3 = forwardMultiplyGate(x, yph); // -6.0002
var y_derivative = (out3 - out) / h; // -2.0

console.log('x is : '+ x);


