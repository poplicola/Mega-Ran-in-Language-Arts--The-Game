ig.module('game.entities.bossdamageflash')
.requires('game.entities.enemy')
.defines(function() 
{
		EntityBossdamageflash = EntityEnemy.extend({
		name: "bossdamageflash",
		maxVel: {x:0, y:0},	
		accel: {x:0, y:0},
		friction: {x:0, y:0},
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 48, y: 48},
		offset: {x: 0, y: 0},
		zIndex: 99,
		gravityFactor:0,
		shiftX: 0,
		shiftY: 0,
		spawner: false,
		attachedBoss: null,
		animSheet: new ig.AnimationSheet('media/bossflash.png', 48, 48),
		init: function(x, y, settings) {
			this.addAnim( 'flash', 0.1, [0,1,2,3,0,1,2,3,0,0]);
			this.parent(x,y,settings);
			this.currentAnim=this.anims.flash.rewind();
			this.currentAnim.flip.x = settings.flip;
			if(settings.flip == true) {
				this.flip=true;
				this.anims.flash.flip.x=true;
			}
			this.attachedBoss = settings.attachedBoss;
			this.shiftX = settings.shiftX;
			this.shiftY = settings.shiftY;
 			this.pos.x += this.shiftX;
 			this.pos.y += this.shiftY;
		},
		update: function() {
			this.pos.x = this.attachedBoss.pos.x + this.shiftX;
			this.pos.y = this.attachedBoss.pos.y + this.shiftY;
			
			if (this.currentAnim.loopCount >= 1)
				this.kill();
			this.parent();
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
