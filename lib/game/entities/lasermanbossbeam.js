ig.module('game.entities.lasermanbossbeam')
.requires('game.entities.enemy')
.defines(function() 
{
		EntityLasermanbossbeam = EntityEnemy.extend({
		name: "lasermanbossbeam",
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
		isMoving: false,
		upward: true,
		animSheet: new ig.AnimationSheet('media/lasermanbossbeam.png', 18, 31),
		init: function(x, y, settings) {
				this.actionTimer = new ig.Timer();
				this.actionTimer.set(0.5);
				this.addAnim( 'shoot', 10, [0], true);
				this.parent(x,y,settings);
				this.currentAnim = this.anims.shoot.rewind();
				this.vel.x = settings.velocityX;
				this.vel.y = settings.velocityY;
				this.upward = settings.upward;
				this.collides = ig.Entity.COLLIDES.NEVER;
		},
		update: function() {

			if (this.actionTimer.delta() >= 0)
			{
				if (this.upward)
					this.vel.y -= 255;
				else
					this.vel.y += 255;
				this.isMoving = true;
			}
			
			if (this.actionTimer.delta() >= 0.5)
				this.kill();
			
			/* since we are set to COLLISION.NEVER manually test for collision with player */
			if (ig.game.getEntityByName('megaran') != undefined)
			{
				if (!ig.game.getEntityByName('megaran').invincible)
					if (ig.game.getEntityByName('megaran').touches(this))
						ig.game.getEntityByName('megaran').collideWith(this, 'x');
			}
			/* kill ourself if we are more than 1 screen away from the current viewfield */
        	if(this.pos.y < ig.game.screen.y - ig.system.height)
				this.kill();
			else if(this.pos.y > (ig.game.screen.y + 2 * ig.system.height))
			   this.kill();
			this.parent();
		},
		collideWith: function(other, axis) {
          	//this.kill();
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