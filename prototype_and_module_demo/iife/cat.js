(function () {

  if (typeof AnimalSpace === "undefined") {
    window.AnimalSpace = {};
  }

  var Animal = AnimalSpace.Animal;

  function Cat(name) {
    Animal.call(this, name);
  }

  function Surrogate () {};

  Surrogate.prototype = Animal.prototype;
  Cat.prototype = new Surrogate();

  AnimalSpace.Cat = Cat;


})();
