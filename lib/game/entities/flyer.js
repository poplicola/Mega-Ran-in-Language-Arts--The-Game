ig.module('game.entities.flyer')
.requires('game.entities.enemy')
.defines(function() {
	EntityFlyer = EntityEnemy.extend({
		collides: ig.Entity.COLLIDES.FIXED,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		travelVelocity: 50,
		gravityFactor: 0,
		health: 20,
		range: 150,
		anchorPoint: {x: 0, y: 0},
		vel: {x: 50, y:0},
		init: function(x,y,settings) {
			this.anchorPoint.x = x;
			this.anchorPoint.y = y;
			this.parent(x,y,settings);
		},
		update: function() {
			if(((this.anchorPoint.x - this.range) > this.pos.x) || ((this.anchorPoint.x + this.range) < this.pos.x))
				this.flip = !this.flip;
			if(this.flip)
				this.vel.x = this.travelVelocity;
			else
				this.vel.x = -this.travelVelocity;
        	this.parent();
		},
		handleMovementTrace: function(res) {
			if(res.collision.x)
				this.flip = !this.flip;
			this.parent(res);
		}
	});
});