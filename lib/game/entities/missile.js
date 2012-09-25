ig.module('game.entities.missile')
.requires('game.entities.enemy', 'game.entities.missileexplosion')
.defines(function() 
{
		EntityMissile = EntityEnemy.extend({
		name: "missile",
		maxVel: {x:500, y:500},
		maxHomingVel: {x:100, y:100},
		maxSwarmVel: {x:500, y:25},
		accel: {x:0, y:0},
		friction: {x:0, y:0},
		collides: ig.Entity.COLLIDES.ACTIVE,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 8, y: 8},
		offset: {x: 6, y: 6},
		zIndex: 101,
		gravityFactor: 0,
		spawner: false,
		actionTimer: null,
		shotType: 'homing',
		animSheet: new ig.AnimationSheet('media/missile.png', 20,20),
		velocityScale: 1,
		swarmCount: 0,
		dying: false,
		init: function(x, y, settings) {
				this.addAnim('left', 0.15, [0,0,0,1,0,0,0,7]);
				this.addAnim('right', 0.15, [4,4,4,3,4,4,4,5]);
				this.collides = ig.Entity.COLLIDES.NEVER;
				this.actionTimer = new ig.Timer(),
				this.parent(x,y,settings);
				this.shotType = settings.shotType;
				this.setFlipByPlayerPos();
				this.initByShotType();
		},
		update: function() {
		
			if (this.dying)
			{
				ig.game.spawnEntity(EntityMissileexplosion, this.pos.x - 1, this.pos.y - 1);
				this.kill();
			}
				
			this.setPositionByShot();
			this.setAnimationByShot();
			this.parent();
		},
		initByShotType: function()
		{
			switch(this.shotType)
			{
				case 'homing':
					this.vel.x = this.velocityScale * 30;
					this.actionTimer.set(0.15);
					break;
				case 'swarm':
					//swarmCount = ig.game.getEntitiesByType(EntityMissile).length
					this.vel.x = this.velocityScale * 90;
					//this.vel.y = this.swarmCount - 9;
					this.actionTimer.set(0.1);
					break;
			}
		},
		setFlipByPlayerPos: function()
		{
			if (ig.game.getEntityByName('megaran') == undefined)
				return;
				
			// if player is to the left
			if (ig.game.getEntityByName('megaran').pos.x - ig.game.getEntityByName('megaran').size.x <= this.pos.x) 
			{					
				if (this.flip == false)
					this.flip = true;
				this.velocityScale = -1;
			}
			else
			{
				if (this.flip == true)
					this.flip = false;
				this.velocityScale = 1;
			}
		},
		setPositionByShot: function()
		{
			switch(this.shotType)
			{
				/* homing missiles doggedly follow the player */
				case 'homing':
					if (ig.game.getEntityByName('megaran') == undefined)
						break;
					/* adjust speed in X direction */
					if (ig.game.getEntityByName('megaran').pos.x- ig.game.getEntityByName('megaran').size.x <= this.pos.x)
					{
					 	if (this.vel.x > -this.maxHomingVel.x)
					 		this.vel.x -= 3; 
					}
					else
					{
						if (this.vel.x < this.maxHomingVel.x)
					 		this.vel.x += 3;
					}
					/* adjust speed in Y direction */
					if (ig.game.getEntityByName('megaran').pos.y- ig.game.getEntityByName('megaran').size.y <= this.pos.y)
					{
					 	if (this.vel.y > -this.maxHomingVel.y)
					 		this.vel.y -= 3; 
					}
					else
					{
						if (this.vel.y < this.maxHomingVel.y)
					 		this.vel.y += 3;
					}
					break;
				/* swarming missiles fire forward with acceleration and randomly move up and down */
				case 'swarm':
					if (ig.game.getEntityByName('megaran') == undefined)
						break;
						
					if (this.vel.x > 0)
						this.vel.x += 5;
					else
						this.vel.x -= 5;
						
					this.vel.y += (0.5 - Math.random()) * 3;
					
					break;
			}
		},
		setAnimationByShot: function()
		{
			if (this.actionTimer.delta() >= 0)
			{
				switch(this.shotType)
				{
					case 'homing':
						if (this.vel.x > 0)
						{
							this.currentAnim = this.anims.right;
							this.currentAnim.gotoRandomFrame();
						}
						else
						{
							this.currentAnim = this.anims.left;
							this.currentAnim.gotoRandomFrame();
						}
						this.actionTimer.set(0.15);
						break;
				}
			}
		},
		check: function(other) {
			if (other instanceof EntityMegaran)
			{
				this.collides = ig.Entity.COLLIDES.ACTIVE;
				this.dying = true;
			}
			else if (other instanceof EntityProjectile)
			{
				this.collides = ig.Entity.COLLIDES.ACTIVE;
				this.dying = true;
			}
		},
		collideWith: function(other, axis) {
		if(!(other instanceof EntityProjectile)){
			   	this.dying = true;
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