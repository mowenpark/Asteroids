(function () {

  if (typeof AnimalSpace === "undefined") {
    window.AnimalSpace = {};
  }

  // window.AnimalSpace = {};

  function Animal(name) {
    this.name = name;
  }

  window.AnimalSpace.Animal = Animal;

})();
