(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

  var movingObject = function(pos, game, vel, radius, color) {
    this.pos = pos;
    this.game = game;
    this.vel = vel;
    this.radius = radius;
    this.colour = color;
  };

  movingObject.prototype.draw = function(ctx){
    var x = this.pos[0];
    var y = this.pos[1];
    ctx.beginPath();
    ctx.arc(x,y,this.radius,0,2*Math.PI);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.stroke();
  };

  movingObject.prototype.move = function(){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    this.game.wrap(this.pos);
  };

  window.Asteroids.movingObject = movingObject;

  // var circle = new movingObject([12,12],[10,10],60,"red");
  // circle.draw(ctx);

})();
