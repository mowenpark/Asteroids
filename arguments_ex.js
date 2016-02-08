function sum(){
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1,2,3,4));

Function.prototype.myBind = function(context){
  var fn = this;
  var bindArgs = [].slice.apply(arguments).slice(1);
  var func = function(){
    var callArgs = [].slice.apply(arguments).slice(0);
    var fullArgs= bindArgs.concat(callArgs);
    return fn.apply(context, fullArgs);
  };
  return func;
};

// var boundMarkov = markov.says.myBind(breakfast, "meow"); // calling myBind, arguments = bind arguments
// boundMarkov("Markov"); // calling bound function, arguments = call arguments

function Cat(name) {
  this.name = name;
}

Cat.prototype.says = function (sound, person) {
  console.log(this.name + " says " + sound + " to " + person + "!");
  return true;
};

var markov = new Cat("Markov");
var breakfast = new Cat("Breakfast");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true

markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

Function.prototype.curry = function (numArgs) {
  var args = [];
  var funct = this;
  var spicycurry = function (arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return funct.apply(null, args);
    } else {
      return spicycurry;
    }
  };
  return spicycurry;
};
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

console.log(sumThree.curry(3)(4)(20)(6));

var curriedSum = function (numArgs) {
  var numbers = [];
  var _curriedSum = function (number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return numbers.reduce(function(a, b) {
        return a + b;
      });
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
};

console.log(curriedSum(3)(1)(2)(3));

console.log(curriedSum(5)(1)(2)(3)(4)(5));
