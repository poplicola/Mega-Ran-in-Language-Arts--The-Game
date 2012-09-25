ig.module('game.entities.lasermanboss')
.requires('game.entities.bossenemy', 'game.entities.lasermanbossshot', 'game.entities.lasermanbossbeamgenerator')
.defines(function() {
	EntityLasermanboss = EntityBossenemy.extend({
		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		walkVelocity: 100,
		floatVelocity: 35,
		smalljumpVelocity: 200,
		velocityScale: 1,
		gravityFactor: 0,
		name: "mirrormanboss",
		health: 100,
		maxHealth:100,
		anchorPoint: {x: 0, y: 0},
		vel: {x: 0, y:0},
		size: {x: 16, y:23},
		maxVel: {x:200, y:800},	
		offset: {x:15, y:25},
		friction: {x:0, y:0},
		animSheet: new ig.AnimationSheet('media/lasermanboss.png', 48,48),
		actionState: 'dropfromcieling',
		previousActionState: 'none',
		actionTimer: null,
		bonusTimer: null,
		bonusActionFinished: true,
		portrait: new ig.Image("media/Portrait_Laser.png"),
		init: function(x,y,settings)
		{
			this.actionTimer = new ig.Timer(),
			this.bonusTimer = new ig.Timer();
			this.bonusActionFinished = true;  
			this.addAnim('salute', 0.15, [0,6,5,4,4,5,6,0]);
			this.addAnim('wink', 0.15, [0,14,15,16,17,25]);
			this.addAnim('walk', 0.15, [1,2,3,2]);
			this.addAnim('teleportout', 0.15, [0,14,15,16,17,27,28,29,30], true);
			this.addAnim('teleportin', 0.15, [30,29,28,27,10,10,11,10,13,26], true);
			this.addAnim('singleshot', 0.1, [0,18,19,20,21,22,23,22,23,24]);
			this.addAnim('dropfromcieling', 0.1, [10,10,11,10,10,11,10,10,11,10,10,11,10,10,11,10,10,11,10,10,11,10,10,11,10,10,11,10,10,11,10,10,11,10,10,11,10,10,11,10,9,9,9,9,9,9,9,9,9,2,0], true);
			this.addAnim('powerup', 0.15, [6,6,5,4,4,4,4,5,6,0,25,14,15,16,17,20,20,19,20,18,0], true);
			this.addAnim('smalljump', 0.1, [26,9,10,10,11,10,10,11,9,6,6,12,12,13,26], true);
			this.anchorPoint.x = x;
			this.anchorPoint.y = y;
			this.parent(x,y,settings);
			this.health = 100;
			this.maxHealth = 100;
			this.flip = true;
			this.actionState = 'dropfromcieling';
			this.currentAnim = this.anims.dropfromcieling;
			this.currentAnim.flip.x = this.flip;
			this.actionTimer.set(6);
			this.vel.y = this.floatVelocity;
		},
		update: function() 
		{	
			/* if player is taking damage, turn off our collison damage */
			// if (ig.game.getEntityByName('megaran') != undefined)
// 			{
// 				if (ig.game.getEntityByName('megaran').invincible == true && this.collides != ig.Entity.COLLIDES.NEVER)
// 					this.collides = ig.Entity.COLLIDES.NEVER;
// 				else if (ig.game.getEntityByName('megaran').invincible == false && this.collides != ig.Entity.COLLIDES.ACTIVE)
// 					this.collides = ig.Entity.COLLIDES.ACTIVE;
// 			}

			/* if we're touching the player, set us to active */
			if (this.collides != ig.Entity.COLLIDES.NEVER)
			{
				this.collides = ig.Entity.COLLIDES.PASSIVE;
				if (ig.game.getEntityByName('megaran') != undefined)  // NEVER is only called during 'teleportout' and 'teleportin'
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
					/* shoot at the right time for singleshot */
					if (this.actionState == 'singleshot')
					{
						if (!this.flip)
							ig.game.spawnEntity(EntityLasermanbossshot, this.pos.x + 18, this.pos.y + 4, {velocityX: 255, velocityY: 0});
						else
							ig.game.spawnEntity(EntityLasermanbossshot, this.pos.x - 22, this.pos.y + 4, {velocityX: -255, velocityY: 0});
						this.bonusActionFinished = true;
					}
					/* begin teleporting in direction we're facing for 'teleportout' */
					else if (this.actionState == 'teleportout')
					{
						if (!this.flip)
							ig.game.spawnEntity(EntityLasermanbossbeamgenerator, this.pos.x + 18, this.pos.y + 4, {velocityX: this.velocityScale * 60, velocityY: -255, bottomY: this.pos.y + 16, upward: true});
						else
							ig.game.spawnEntity(EntityLasermanbossbeamgenerator, this.pos.x - 22, this.pos.y + 4, {velocityX: this.velocityScale * 60, velocityY: -255, bottomY: this.pos.y + 16, upward: true});
						this.collides = ig.Entity.COLLIDES.NEVER;
						this.pos.y -= 400.0;
						this.gravityFactor = 0;
						this.bonusActionFinished = true;
					}
					/* firMahLas0r when above the screen */
					else if (this.actionState == 'orbitallaser')
					{
						if (ig.game.getEntityByName('orbitallaser') != undefined)
							ig.game.getEntityByName('orbitallaser').firMahLas0r();
						this.bonusTimer.set(1.5);
					}
					/* zap us back into position during the laser back down */
					else if (this.actionState == 'teleportin')
					{
						this.collides = ig.Entity.COLLIDES.PASSIVE;
						this.pos.y += 350.0;
						//this.velocityY = 255;
						this.gravityFactor = 1;
						this.setFlipByPlayerPos();
						this.currentAnim = this.anims.teleportin.rewind();
						this.currentAnim.flip.x = this.flip;
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
				else if(this.actionState == 'teleportout')
				{
					/* set us up for orbital laser */
					this.previousActionState = this.actionState;
					this.actionState = 'orbitallaser';
					//this.actionTimer.set(4 + Math.floor(Math.random()*4));
					this.actionTimer.set(9.1);
					this.bonusTimer.set(1);
					this.bonusActionFinished = false;
				}
				else if(this.actionState == 'orbitallaser')
				{
					this.previousActionState = this.actionState;
					this.actionState = 'teleportin';
					this.bonusTimer.set(1.0);
					this.actionTimer.set(2.5);
					if (ig.game.getEntityByName('orbitallaser') != undefined)
					{
						deltaX =  Math.floor(Math.random() * ig.game.getEntityByName('orbitallaser').size.x);
						ig.game.spawnEntity(EntityLasermanbossbeamgenerator, ig.game.getEntityByName('orbitallaser').pos.x + deltaX, this.pos.y, {velocityX: 0, velocityY: 255, bottomY: this.pos.y, upward: false});
						this.pos.x += deltaX;
					}
					else
						ig.game.spawnEntity(EntityLasermanbossbeamgenerator, this.pos.x, this.pos.y, {velocityX: 0, velocityY: 255, bottomY: this.pos.y, upward: false});
					this.bonusActionFinished = false;
				}
				else /* if we're done doing anything but summoning or spawning */
				{
					this.previousActionState = this.actionState;
					this.setFlipByPlayerPos();
					this.setNextAction();
				}
			}
			if (this.accel.x <= 0)
				this.accel.x = 0;
			if (this.accel.y <= 0)
				this.accel.y = 0;
			
        	this.parent();
		},
		setNextAction: function() 
		{			
			newAction = Math.floor(Math.random()*100);
			if (newAction <= 35) 
			{
				/* preform a walk for 0-2 seconds in 0.5 intervals*/
				this.setFlipByPlayerPos();
				this.actionState = 'walk';
				this.currentAnim = this.anims.walk.rewind();
				this.currentAnim.flip.x = this.flip;
				this.actionTimer.set(Math.floor(Math.random()*4) * 0.5);
				this.vel.x = this.walkVelocity * this.velocityScale;
				this.vel.y = 0;
				this.gravityFactor = 1;
			}
			else if (newAction <= 55)
			{
				/* preform a small jump in the player's direction */
				this.setFlipByPlayerPos();
				this.actionState = 'smalljump';
				this.currentAnim = this.anims.smalljump.rewind();
				this.currentAnim.flip.x = this.flip;
				this.actionTimer.set(2.0);
				this.vel.x = this.walkVelocity * this.velocityScale * 1.5;
				this.vel.y = -this.smalljumpVelocity;
				this.gravityFactor = 1;
			}
			else if (newAction <= 80)
			{
				/* shoot once in player's direction */
				if (this.previousActionState != 'singleshot')
				{
					this.setFlipByPlayerPos();
					this.actionState = 'singleshot';
					this.currentAnim = this.anims.singleshot.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(1.0);
					this.bonusTimer.set(0.7);
					this.bonusActionFinished = false;
					this.vel.x = 0;
					this.vel.y = 0;
					this.gravityFactor = 1;
				}
				else
					this.setNextAction();
			}
			else if (newAction <= -1)
			{
				/* teleport out making a sweeping laser in player's direction */
				this.setFlipByPlayerPos();
				this.actionState = 'teleportout';
				this.currentAnim = this.anims.teleportout.rewind();
				this.currentAnim.flip.x = this.flip;
				this.actionTimer.set(3.0);
				this.bonusTimer.set(1.2);
				this.bonusActionFinished = false;
				this.vel.x = 0;
				this.vel.y = 0;
				this.gravityFactor = 1;
			}
			else if (newAction <= 90) 
			{
				/* preform a wink */
				if (this.previousActionState != 'wink')
				{
					this.setFlipByPlayerPos();
					this.actionState = 'wink';
					this.currentAnim = this.anims.wink.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(0.8);
					this.vel.x = 0;
					this.vel.y = 0;
					this.gravityFactor = 1;
				}
				else
					this.setNextAction();
			}
			else 
			{
				/* preform a salute */
				if (this.previousActionState != 'salute')
				{
					this.setFlipByPlayerPos();
					this.actionState = 'salute';
					this.currentAnim = this.anims.salute.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(1.2);
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
		kill: function(){
			_gaq.push(["_trackEvent", "Bosses", "Defeated", "Laser Man", undefined, true]);
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