ig.module('game.entities.healthbar')
.requires('impact.entity')
.defines(function() {
		EntityHealthbar= ig.Entity.extend({
		name: "healthbar",
		maxVel: {x:0, y:0},	
		accel: {x:0, y:0},
		friction: {x:0, y:0},
		collides: ig.Entity.COLLIDES.NEVER,
		size: {x: 20, y:200},
		offset: {x: 0, y: 0},
        value: 0,
		gravityFactor:0,
		image: new ig.Image('media/lifebar.png'),
		init: function(x, y, settings) {
			this.parent(x,y,settings);
		},
		update: function() {
			this.value = ig.game.megaran.health/10;
		},
		draw: function() {
			for(i=0;i<20;i++)
			{
				filled = i < this.value ? 0 : 1;
				this.image.drawTile(this.pos.x, this.pos.y+81-4*(i+1), filled, 10, 5);
			}

		},
		collideWith: function(other, axis) {
		},
		handleMovementTrace: function(res) {
		},    
		kill: function() {
		}
	});
});
