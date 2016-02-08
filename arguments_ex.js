// function sum(){
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// 
// console.log(sum(1,2,3,4));
//
// Function.prototype.myBind = function(context){
//   var fn = this;
//   var args = [].slice.apply(arguments).slice(1);
//   var func = function(){
//     var args2 = [].slice.apply(arguments).slice(0);
//     var args3 = args.concat(args2);
//     return fn.apply(context, args3);
//   };
//   return func;
// };
//
// function Cat(name) {
//   this.name = name;
// }
//
// Cat.prototype.says = function (sound, person) {
//   console.log(this.name + " says " + sound + " to " + person + "!");
//   return true;
// };
//
// var markov = new Cat("Markov");
// var breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true

// Function.prototype.curry = function (numArgs) {
//
// };

var curriedSum = function (numArgs) {
  var numbers = [];
  var _curriedSum = function () {
    numbers.push(arguments);
  };
    if (numbers.length === numArgs) {
      return numbers.reduce(function(a, b) {
        return a + b;
      });
    } else {
      return _curriedSum;
    }
  };

console.log(curriedSum(3)(1)(2)(3));
