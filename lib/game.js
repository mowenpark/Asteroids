(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }
  var Game = function (dimx, dimy) {
    this.DIM_X = dimx;
    this.DIM_Y = dimy;
    this.NUM_ASTEROIDS = 15;
    this.asteroids = [];
  };

  Game.prototype.addAsteroids = function(){
    for (var i = 0; i < this.NUM_ASTEROIDS; ++i) {
      // var posX = window.Asteroids.randomVec(0,this.DIM_X);
      var posY = window.Asteroids.randomVec(0,this.DIM_Y);
      this.asteroids.push(
        new window.Asteroids.Asteroid(posY)
      );
    }
  };

  Game.prototype.draw = function(ctx) {
   //this will empty the canvas
   ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

   this.asteroids.forEach(function (asteroid) {
     asteroid.draw(ctx);
   });
 };

  window.Asteroids.Game = Game;
})();
