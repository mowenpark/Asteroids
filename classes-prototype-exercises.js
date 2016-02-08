Function.prototype.inherits = function (parentObject) {
  var childObj = this;
  function Surrogate () {}
  Surrogate.prototype = parentObject.prototype;
  childObj.prototype = new Surrogate();
  childObj.prototype.constructor = childObj;
};


function MovingObject () {
  this.name = "wawa";
}

MovingObject.prototype.sayHi = function() {
  console.log("lajs;dlkjfa hello something");
};

function Ship () {
  MovingObject.call(this); // have to explicitly call the parent function
}
Ship.inherits(MovingObject);

// function Asteroid () {
//   MovingObject.call(this, );
// }
// Asteroid.inherits(MovingObject);
// var Aster = new Asteroid("wawa");
var Woop = new Ship();

// console.log(Aster.name);


console.log(Woop.sayHi());
