(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var Asteroid = function(pos, game) {

    var velocity = window.Asteroids.randomVec(-10, 10);
    window.Asteroids.movingObject.call(this, pos, game, velocity,
      Asteroid.RADIUS, Asteroid.COLOR);
  };

  Asteroid.inherits(window.Asteroids.movingObject);

  Asteroid.COLOR = 'grey';
  Asteroid.RADIUS = '40';

  window.Asteroids.Asteroid = Asteroid;

})();
