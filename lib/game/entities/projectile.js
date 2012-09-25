
ig.module('game.entities.projectile')
.requires('impact.entity')
.defines(function() {
		EntityProjectile = ig.Entity.extend({
		name: "bustershot",
		maxVel: {x:500, y:0},	
		accel: {x:0, y:0},
		friction: {x:0, y:0},
		projectileSpeed: 350,
		collides: ig.Entity.COLLIDES.LITE,
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,
		size: {x: 5, y:7},
		offset: {x: 0, y: 0},
		zIndex: 99,
		gravityFactor:0,
		power: 0,
		animSheet: new ig.AnimationSheet('media/projectile.png', 36, 10),
		init: function(x, y, settings) {
			if(ig.game.gameState.weaponPower > 10)
				this.power = 2;
			else if(ig.game.gameState.weaponPower > 5)
				this.power = 1;
			this.parent(x,y,settings);
			this.addAnim( 'spawn', 0.1, [0+3*this.power,0+3*this.power,0+3*this.power]);
			this.addAnim( 'idle', 0.15, [2+3*this.power,1+3*this.power,2+3*this.power,1+3*this.power,2+3*this.power,1+3*this.power,2+3*this.power,1+3*this.power,2+3*this.power,1+3*this.power,2+3*this.power,1+3*this.power,2+3*this.power,1+3*this.power,2+3*this.power,1+3*this.power,2+3*this.power,1+3*this.power,2+3*this.power,1+3*this.power,2+3*this.power,1+3*this.power]);
			this.currentAnim.flip.x = settings.flip;
			this.currentAnim=this.anims.spawn.rewind();
			if(settings.flip == true) {
				this.vel.x = -this.projectileSpeed;
				this.flip=true;
				this.anims.spawn.flip.x=true;
				this.anims.idle.flip.x=true;
			}
			else {
				this.offset.x = 29;
				this.vel.x = this.projectileSpeed;
			}
		},
		update: function() {
			if(this.currentAnim == this.anims.spawn && this.currentAnim.loopCount > 0)
			   this.currentAnim = this.anims.idle;	
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
