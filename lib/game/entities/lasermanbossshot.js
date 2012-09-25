ig.module('game.entities.lasermanbossshot')
.requires('game.entities.enemy')
.defines(function() 
{
		EntityLasermanbossshot = EntityEnemy.extend({
		name: "lasermanbossshot",
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
		spawnTimer: null,
		animSheet: new ig.AnimationSheet('media/lasermanbossshot.png', 33, 9),
		init: function(x, y, settings) {
				this.spawnTimer = new ig.Timer();
				this.addAnim( 'shoot', 10, [0], true);
				this.parent(x,y,settings);
				this.currentAnim = this.anims.shoot.rewind();
				this.vel.x = settings.velocityX;
				this.vel.y = settings.velocityY;
				this.collides = ig.Entity.COLLIDES.NEVER;
		},
		update: function() {
			/* since we are set to COLLISION.NEVER manually test for collision with player */
			if (ig.game.getEntityByName('megaran') != undefined)
			{
				if (!ig.game.getEntityByName('megaran').invincible)
					if (ig.game.getEntityByName('megaran').touches(this))
						ig.game.getEntityByName('megaran').collideWith(this, 'x');
			}
			/* kill ourself if we are more than 1 screen away from the current viewfield */
        	if(this.pos.x < ig.game.screen.x - ig.system.width)
				this.kill();
			else if(this.pos.x > (ig.game.screen.x + 2 * ig.system.width))
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