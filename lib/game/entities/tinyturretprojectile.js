ig.module('game.entities.tinyturretprojectile')
.requires('game.entities.enemy')
.defines(function() {
	EntityTinyturretprojectile = EntityEnemy.extend({
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		gravityFactor: 0 ,
		health: 15,
		vel: {x: 0, y:0},
		size: {x: 4, y:4},
		maxVel: {x:300, y:800},
		offset: {x:2, y:2},
		name: 'tinyturretprojectile',
		animSheet: new ig.AnimationSheet('media/tinyturretprojectile.png', 8, 8),
		actionState: 'fire',
		velocityScale: 0,
		spawner:false,
		dying:false,
		init: function(x,y,settings) {
			this.addAnim('fire', 1, [0], true);
    		this.parent(x,y,settings);
    		this.currentAnim = this.anims.fire.rewind();
    		this.vel.x = settings.velocityX;
    		this.vel.y = settings.velocityY;
		},
		update: function() {			
			if (this.dying)
				this.kill();
				
        	this.parent();
		},
		check: function(other) {
			if (other instanceof EntityMegaran)
			{
				this.collides = ig.Entity.COLLIDES.ACTIVE;
				this.dying = true;
			}
		},
		collideWith: function(other, axis) {
		if(!(other instanceof EntityProjectile)){
			   	this.kill();
		}
		this.parent(other, axis);
		},
		handleMovementTrace: function(res) {
          	if(res.collision.x || res.collision.y) {
				this.kill();
			} 
			this.parent(res);
		},    
		kill: function() {
			this.parent();
		}
	});
});