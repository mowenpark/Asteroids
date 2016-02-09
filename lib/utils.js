Function.prototype.inherits = function (parentObject) {
  var childObj = this;
  function Surrogate () {}
  Surrogate.prototype = parentObject.prototype;
  childObj.prototype = new Surrogate(); // new MovingObject();
  childObj.prototype.constructor = childObj;
};

var randomWithMaxMin = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

window.Asteroids.randomVec = function(min, max){
  var dx = randomWithMaxMin(min, max);
  var dy = randomWithMaxMin(min, max);
  return [dx, dy];
};
