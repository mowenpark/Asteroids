var Animal = require('./animal');

function Cat(name) {
  Animal.call(this, name);
}

function Surrogate() {};
Surrogate.prototype = Animal.prototype;
Cat.prototype = new Surrogate();

module.exports = Cat;
