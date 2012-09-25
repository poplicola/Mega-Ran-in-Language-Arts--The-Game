ig.module('game.entities.smokemanbosscog')
.requires('game.entities.enemy')
.defines(function() 
{
		EntitySmokemanbosscog = EntityEnemy.extend({
		name: "smokemanbosscog",
		maxVel: {x:500, y:500},	
		accel: {x:0, y:0},
		friction: {x:0, y:0},
		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 8, y: 8},
		offset: {x: 3, y: 3},
		zIndex: 99,
		gravityFactor:0,
		power: 1,
		spawner:false,
		animSheet: new ig.AnimationSheet('media/smokemanbosscog.png', 14, 14),
		init: function(x, y, settings) {
			this.addAnim( 'shoot', 10, [0], true);
			this.currentAnim.flip.x = settings.flip;
			this.parent(x,y,settings);
			this.currentAnim=this.anims.shoot.rewind();
			if(settings.flip == true) {
				this.flip=true;
				this.anims.shoot.flip.x=true;
			}
			this.vel.x = settings.velocityX;
			this.vel.y = settings.velocityY;
			this.pos.x += settings.shiftX;
			this.pos.y += settings.shiftY;
		},
		update: function() {
        	if(this.pos.x < ig.game.screen.x)
				this.kill();
			else if(this.pos.x > (ig.game.screen.x + ig.system.width))
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
