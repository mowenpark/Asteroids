(function () {
  if (typeof Asteroids === 'undefined') {
    window.Asteroids = {};
  }

  var GameView = function (ctx, game) {
    this.ctx = ctx;
    this.game = game;
  };

  GameView.prototype.start = function () {
    var gamview = this;
    gamview.game.addAsteroids();
    window.setInterval( function(){
      gamview.game.moveObjects();
      gamview.game.draw(gamview.ctx);
    }, 20);
  };

window.Asteroids.GameView = GameView;

})();
