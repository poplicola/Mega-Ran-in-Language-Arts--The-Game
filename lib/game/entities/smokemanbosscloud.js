ig.module('game.entities.smokemanbosscloud')
.requires('game.entities.enemy')
.defines(function() 
{
		EntitySmokemanbosscloud = EntityEnemy.extend({
		name: "smokemanbosscloud",
		maxVel: {x:500, y:500},	
		accel: {x:0, y:0},
		friction: {x:0, y:0},
		collides: ig.Entity.COLLIDES.LITE,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 12, y: 10},
		offset: {x: 8, y: 9},
		zIndex: 101,
		gravityFactor:0,
		damageTimer: new ig.Timer(),
		animSheet: new ig.AnimationSheet('media/smokemanbosscloud.png', 28, 28),
		spawner: false,
		init: function(x, y, settings) {
			this.addAnim('shortlife', 0.15, [0,1,2,3,4,5,6], true);
			this.currentAnim.flip.x = settings.flip;
			this.parent(x,y,settings);
			if (settings.lifespan == 'shortlife')
			{
				this.currentAnim=this.anims.shortlife.rewind();
				if(settings.flip == true) 
				{
					this.flip=true;
					this.anims.shortlife.flip.x=true;
				}
				this.vel.x = settings.velocityX;
				this.vel.y = settings.velocityY;
				this.collides = ig.Entity.COLLIDES.NEVER;
				this.damageTimer.set(1.05);
			}
		},
		update: function() {
			if (this.damageTimer.delta() >= -0.75)
				this.collides = ig.Entity.COLLIDES.LITE;
			if (this.damageTimer.delta() >= -0.30)
				this.collides = ig.Entity.COLLIDES.NEVER;
			if (this.currentAnim.loopCount >= 1)
				this.kill();
        	if(this.pos.x < ig.game.screen.x)
				this.kill();
			else if(this.pos.x > (ig.game.screen.x + ig.system.width))
			   this.kill();	
			this.parent();
		},
		collideWith: function(other, axis) {
          	this.kill();
			this.parent(other, axis);
		},
		handleMovementTrace: function(res) {
          	if(res.collision.x) {
				this.kill();
			} 
			this.parent(res);
		},    
		kill: function() {
			this.parent();
		}
	});
});
