ig.module('game.entities.missileexplosion')
.requires('game.entities.enemy')
.defines(function() 
{
		EntityMissileexplosion = EntityEnemy.extend({
		name: "missileexplosion",
		maxVel: {x:500, y:500},
		accel: {x:0, y:0},
		friction: {x:0, y:0},
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 4, y: 4},
		offset: {x: 7, y: 7},
		zIndex: 101,
		gravityFactor:0,
		spawner: false,
		actionTimer: null,
		animSheet: new ig.AnimationSheet('media/missileexplosion.png', 18,18),
		init: function(x, y, settings) {
				this.collides = ig.Entity.COLLIDES.NEVER;
				this.addAnim('explode', 0.05, [1,0,2,1,2,3,2,0,3,4,0,4,3,4,0]);
				this.actionTimer = new ig.Timer(),
				this.actionTimer.set(1.5);
				this.currentAnim = this.anims.explode;
				this.parent(x,y,settings);
		},
		update: function() {
			if (this.actionTimer.delta() >= 0)
				this.kill();
			
			this.parent();
		},
		// collideWith: function(other, axis) {
// 		if(!(other instanceof EntityProjectile)){
// 			   	this.kill();
// 		}
// 		this.parent(other, axis);
// 		},
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