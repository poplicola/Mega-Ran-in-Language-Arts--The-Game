ig.module('game.entities.shadowfistboss')
.requires('game.entities.bossenemy', 'game.entities.missile')
.defines(function() {
	EntityShadowfistboss = EntityBossenemy.extend({
		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		walkVelocity: 100,
		floatVelocity: 35,
		smalljumpVelocity: 200,
		velocityScale: 1,
		gravityFactor: 0,
		name: "shadowfistboss",
		health: 150,
		maxHealth:150,
		anchorPoint: {x: 0, y: 0},
		vel: {x: 0, y:0},
		size: {x: 34, y:70},
		maxVel: {x:200, y:800},	
		offset: {x:40, y:10},
		friction: {x:0, y:0},
		animSheet: new ig.AnimationSheet('media/shadowfistboss.png', 120,80),
		actionState: 'dropfromcieling',
		previousActionState: 'none',
		actionTimer: null,
		bonusTimer: null,
		bonusActionFinished: true,
		numMissilesFired: 0,
		portrait: new ig.Image("media/Portrait_Shadowfist.png"),
		init: function(x,y,settings)
		{
			this.actionTimer = new ig.Timer(),
			this.bonusTimer = new ig.Timer();
			this.bonusActionFinished = true;  
			this.anchorPoint.x = x;
			this.anchorPoint.y = y;
			this.parent(x,y,settings);
			this.health = 150;
			this.maxHealth = 150;
			this.flip = true;
			this.addAnim('dropfromcieling', 0.5, [0,6,0,6,0,6,], true);
			this.addAnim('powerup', 0.14, [6,7,8,8,9,8,8,7,6,11,12,13,13,14,2,3,4,5,4,3,4], true);
			this.addAnim('stompinplace', 0.08, [10,11,12,13,14,15,16,17,15,13,11,17,15], true);
			this.addAnim('walk', 0.15, [10,11,12,13,14,15,16,17]);
			this.addAnim('smash', 0.15, [2,3,4,1,4,5], true);
			this.addAnim('dash', 0.1, [2,3,4,1,4,1,1,4,1,1,1,4,1,1,4,1,4], true);
			this.addAnim('firehoming', 0.10, [6,6,12,15,11,16,6,7,7,8,8,8,8,9,9,6,0], true);
			this.addAnim('fireswarm', 0.10, [17,15,13,11,17,15,13,11,17,15,13,11,17,15,6,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,9,7,8,8,8,8,8,6],true);
			this.actionState = 'dropfromcieling';
			this.currentAnim = this.anims.dropfromcieling;
			this.currentAnim.flip.x = this.flip;
			this.actionTimer.set(3);
			this.vel.y = this.floatVelocity;
		},
		update: function() 
		{	
			/* if we're touching the player, set us to active */
			if (this.collides != ig.Entity.COLLIDES.NEVER)
			{
				this.collides = ig.Entity.COLLIDES.PASSIVE;
				if (ig.game.getEntityByName('megaran') != undefined)  // NEVER should only be called upon spawning and transition
				{
					if (ig.game.getEntityByName('megaran').touches(this))
						this.collides = ig.Entity.COLLIDES.ACTIVE;
					for (i=0; i<ig.game.getEntitiesByType(EntityProjectile).length; i++)
						if (ig.game.getEntitiesByType(EntityProjectile)[i].touches(this))
							this.collides = ig.Entity.COLLIDES.ACTIVE;
				}
			}
			
			/* check our interrupt spawns and anims */
			if (!this.bonusActionFinished)
			{
				/* check our shot timer first */
				if (this.bonusTimer.delta() >= 0)
				{
					if(this.actionState == 'firehoming')
					{
						if (this.numMissilesFired == 0)
						{
							if (!this.flip)
								ig.game.spawnEntity(EntityMissile, this.pos.x - 5, this.pos.y + 39, {shotType: 'homing'});
							else
								ig.game.spawnEntity(EntityMissile, this.pos.x + 5, this.pos.y + 39, {shotType: 'homing'});
							this.numMissilesFired++;
							this.bonusTimer.set(0.6);
						}
						else if (this.numMissilesFired == 1)
						{
							if (!this.flip)
								ig.game.spawnEntity(EntityMissile, this.pos.x + 5, this.pos.y + 41, {shotType: 'homing'});
							else
								ig.game.spawnEntity(EntityMissile, this.pos.x - 5, this.pos.y + 41, {shotType: 'homing'});
							this.numMissilesFired++;
							this.bonusActionFinished = true;
						}
					}
					else if(this.actionState == 'fireswarm')
					{
						if (this.numMissilesFired == 0)
						{
							this.setFlipByPlayerPos();
							this.vel.x = -10 * this.velocityScale;	// slide backward while firing missile swarm
						}
						
						if (this.numMissilesFired <= 17)
						{
							if (!this.flip)
							{
								if (this.numMissilesFired % 2 == 0)
									ig.game.spawnEntity(EntityMissile, this.pos.x - 5, this.pos.y + 39, {shotType: 'swarm'});
								else
									ig.game.spawnEntity(EntityMissile, this.pos.x + 5, this.pos.y + 41, {shotType: 'swarm'});
							}
							else
							{
								if (this.numMissilesFired % 2 == 0)
									ig.game.spawnEntity(EntityMissile, this.pos.x + 5, this.pos.y + 39, {shotType: 'swarm'});
								else
									ig.game.spawnEntity(EntityMissile, this.pos.x - 5, this.pos.y + 41, {shotType: 'swarm'});
							}
							this.bonusTimer.set(0.1);
							this.numMissilesFired++;
						}
						else
							this.bonusActionFinished = true;
					}
					else if(this.actionState == 'smash')
					{
						this.vel.x = 150 * this.velocityScale;
						this.bonusActionFinished = true;
					}
					else if(this.actionState == 'dash')
					{
						this.vel.x = 180 * this.velocityScale;
						this.bonusActionFinished = true;
					}
				}
			}

			/* update when action timer reaches 0 */
			if (this.actionTimer.delta() >= 0)
			{	
				if(this.actionState == 'dropfromcieling') 
				{
					this.previousActionState = this.actionState;
					this.actionState = 'powerup';
					this.currentAnim = this.anims.powerup.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(3);
					this.gravityFactor = 1;
					
				}     
				else if(this.actionState == 'powerup') 
				{
					this.previousActionState = this.actionState;
					this.setNextAction();
				}
				else if(this.actionState == 'smash')
				{
					this.previousActionState = this.actionState;
					this.setFlipByPlayerPos();
					this.setNextAction();
				}
				else /* if we're done doing anything but summoning or spawning */
				{
					this.previousActionState = this.actionState;
					this.setFlipByPlayerPos();
					this.setNextAction();
				}
			}
			
        	this.parent();
		},
		setNextAction: function() 
		{			
			newAction = Math.floor(Math.random()*100);
			if (newAction <= 30) 
			{
				/* preform a walk for 0-2 seconds in 0.5 intervals*/
				this.setFlipByPlayerPos();
				this.actionState = 'walk';
				this.currentAnim = this.anims.walk.rewind();
				this.currentAnim.flip.x = this.flip;
				this.actionTimer.set(Math.floor(Math.random()*4) * 0.5);
				this.vel.x = this.walkVelocity * this.velocityScale;
				this.vel.y = 0;
			}
			else if (newAction <= 50)
			{
				/* fire 2 homing missiles at the player */
				if (this.previousActionState != 'firehoming')
				{
					this.setFlipByPlayerPos();
					this.actionState = 'firehoming';
					this.currentAnim = this.anims.firehoming.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(1.7);
					this.bonusTimer.set(0.8);
					this.bonusActionFinished = false;
					this.numMissilesFired = 0;
					this.vel.x = 0;
					this.vel.y = 0;
				}
				else
					this.setNextAction();
			}
			else if (newAction <= 60)
			{
				if (this.previousActionState != 'fireswarm')
				{
					this.setFlipByPlayerPos();
					this.actionState = 'fireswarm';
					this.currentAnim = this.anims.fireswarm.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(3.8);
					this.bonusTimer.set(1.6);
					this.bonusActionFinished = false;
					this.numMissilesFired = 0;
					this.vel.x = 0;
					this.vel.y = 0;
				}
				else
					this.setNextAction();
			}
			else if (newAction <= 80)
			{
				/* if ran is close in the x-direction, preform a smash attack */
				relationalPos = (ig.game.player.pos.x - ig.game.player.offset.x) - this.pos.x;
				if (relationalPos >= -100 &&
					relationalPos <= 100 &&
					this.previousActionState != 'smash')
				{
					this.setFlipByPlayerPos();
					this.actionState = 'smash';
					this.currentAnim = this.anims.smash.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(0.9);
					this.bonusTimer.set(0.4);
					this.bonusActionFinished = false;
					this.vel.x = 60 * this.velocityScale;
					this.vel.y = 0;
				}
				else
					this.setNextAction();
			}
			else if (newAction <= 90)
			{
				/* if ran is far away in the x-direction, preform a dashing-smash attack */
				relationalPos = (ig.game.player.pos.x - ig.game.player.offset.x) - this.pos.x;
				if (Math.abs(relationalPos) >= 150 &&
					this.previousActionState != 'dash')
				{
					this.setFlipByPlayerPos();
					this.actionState = 'dash';
					this.currentAnim = this.anims.dash.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(1.8);
					this.bonusTimer.set(0.4);
					this.bonusActionFinished = false;
					this.vel.x = 60 * this.velocityScale;
					this.vel.y = 0;
				}
				else
					this.setNextAction();
			}
			else 
			{
				/* preform a stomp in place taunt */
				if (this.previousActionState != 'stompinplace')
				{
					this.setFlipByPlayerPos();
					this.actionState = 'stompinplace';
					this.currentAnim = this.anims.stompinplace.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(1.4);
					this.vel.x = 0;
					this.vel.y = 0;
					this.gravityFactor = 1;
				}
				else
					this.setNextAction();
			}
		},
		setFlipByPlayerPos: function()
		{
			if (ig.game.getEntityByName('megaran') == undefined)
				return;
				
			// if player is to the left
			if (ig.game.getEntityByName('megaran').pos.x <= this.pos.x) 
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
		setVelocityScaleByFlip: function()
		{
			if (this.flip == true)
				this.velocityScale = -1;
			else
				this.velocityScale = 1;
		},
// 		setSizeByActionState: function()
// 		{
// 			if (this.actionState == 'smash')
// 			{
// 				if(!this.flip)
// 				{
// 					this.size.x = 48;
// 					this.size.y = 70;
// 					this.offset.x = 48;
// 					this.offset.y = 10;
// 				}
// 				else
// 				{
// 					this.size.x = 48;
// 					this.size.y = 70;
// 					this.offset.x = 12;
// 					this.offset.y = 10;
// 
// 				}
// 			}
// 			else if (this.size.x != 34)
// 			{
// 				this.size.x = 34;
// 				this.size.y = 70;
// 				this.offset.x = 40;
// 				this.offset.y = 10;
// 			}
// 		},
		kill: function(){
			doors=ig.game.getEntitiesByType(EntityBossDoor);
			for(i=0;i<doors.length;i++){
				doors[i].active=true;
			}
			flashes=ig.game.getEntitiesByType(EntityBossdamageflash);
			for(i=0;i<flashes.length;i++){
				flashes[i].kill();
			}
			this.parent();
		}
	});
});