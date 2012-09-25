ig.module('game.entities.lasermanbossbeamgenerator')
.requires('game.entities.enemy', 'game.entities.lasermanbossbeam')
.defines(function() 
{
		EntityLasermanbossbeamgenerator = EntityEnemy.extend({
		name: "lasermanbossbeamgenerator",
		maxVel: {x:500, y:500},	
		accel: {x:0, y:0},
		friction: {x:0, y:0},
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 29, y: 3},
		offset: {x: 2, y: 3},
		zIndex: 101,
		gravityFactor:0,
		spawner: false,
		actionTimer: null,
		spawnCount: 0,
		bottomY: 0,
		upward: true,
		init: function(x, y, settings) {
				this.actionTimer = new ig.Timer(),
				this.actionTimer.set(0.025);
				this.spawnCount = 0;
				this.parent(x,y,settings);
				this.vel.x = settings.velocityX;
				this.vel.y = settings.velocityY;
				this.bottomY = settings.bottomY;
				this.upward = settings.upward;
				this.collides = ig.Entity.COLLIDES.NEVER;
				ig.game.spawnEntity(EntityLasermanbossbeam, this.pos.x, this.bottomY, {velocityX: this.vel.x, velocityY: this.vel.y, bottomY: this.bottomY, upward: this.upward});
		},
		update: function() {
			if (this.actionTimer.delta() >= 0)
			{
				this.spawnCount++;
				ig.game.spawnEntity(EntityLasermanbossbeam, this.pos.x, this.bottomY, {velocityX: this.vel.x, velocityY: this.vel.y, bottomY: this.bottomY, upward: this.upward});
				this.actionTimer.set(0.025);
			}
			
			if (this.spawnCount >= 30)
				this.kill();
			
			this.parent();
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