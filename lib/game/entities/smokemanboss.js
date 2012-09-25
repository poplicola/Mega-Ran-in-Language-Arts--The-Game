ig.module('game.entities.smokemanboss')
.requires('game.entities.bossenemy', 'game.entities.smokemanbosscog', 'game.entities.smokemanbosscloud')
.defines(function() {
	EntitySmokemanboss = EntityBossenemy.extend({
		collides: ig.Entity.COLLIDES.ACTIVE,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		walkVelocity: 80,
		floatVelocity: 35,
		ninjaJumpVelocityY: 150,
		ninjaJumpVelocityX: 120,
		jumpShotVelocityY: 250,
		jumpShotVelocityX: 40,
		gravityFactor: 0,
		name: "smokemanboss",
		health: 100,
		maxHealth:100,
		range: 150,
		anchorPoint: {x: 0, y: 0},
		vel: {x: 0, y:0},
		size: {x: 22, y:30},
		maxVel: {x:200, y:800},	
		offset: {x:13, y:18},
		friction: {x:0, y:0},
		animSheet: new ig.AnimationSheet('media/smokemanboss.png', 48,48),
		actionState: 'dropfromcieling',
		previousActionState: 'none',
		actionTimer: new ig.Timer(),
		smogTimer: new ig.Timer(),
		numberShots: 0,         
		portrait: new ig.Image("media/Portrait_Smoke.png"),
		init: function(x,y,settings)
		{
			this.addAnim('idle', 0.15, [5,5,4,5,5,5,5,4,4]);
			this.addAnim('walk', 0.15, [3,2,1,2]);
			this.addAnim('ninjajump', 0.15, [7,7,10,10,10,10,10,10,8,8]);
			this.addAnim('quickshot', 0.15, [0,11]);
			this.addAnim('runshot', 0.15, [3,2,1,0,2]);
			this.addAnim('jumpshot', 0.15, [7,7,10,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,8,8]);
			this.addAnim('summonsmoke', 0.15, [5,5,7,7,8,8,8,8]);
			this.addAnim('flash', 0.075, [6]);
			this.addAnim('dropfromcieling', .25, [8,8,8,8,8,8,8,8,9,9,9,9,10,10,10,10,10,8], true);
			this.addAnim('powerup', 0.15, [5,5,5,4,0,4,4,0,4,0,7,7,7,7,8,7,8,8,8,5], true);
			this.anchorPoint.x = x;
			this.anchorPoint.y = y;
			this.flip = true;
			this.actionState = 'dropfromcieling';
			this.currentAnim = this.anims.dropfromcieling;
			this.currentAnim.flip.x = this.flip;
			this.actionTimer.set(6);
			this.vel.y = this.floatVelocity;
			this.parent(x,y,settings);
			this.smogTimer.set(.1);
		},
		update: function() 
		{
			// if player is taking damage, turn off our collison damage
			if (ig.game.getEntityByName('megaran') != undefined)
			{
				if (ig.game.getEntityByName('megaran').invincible == true && this.collides != ig.Entity.COLLIDES.NEVER)
					this.collides = ig.Entity.COLLIDES.NEVER;
				else if (ig.game.getEntityByName('megaran').invincible == false && this.collides != ig.Entity.COLLIDES.ACTIVE)
					this.collides = ig.Entity.COLLIDES.ACTIVE;
			}
			
			// catch for outdated flash anim
			if(this.currentAnim == this.anims.flash && this.currentAnim.loopCount > 0)
			{
				this.setNextAction();
			}
			
			/* every .1 seconds, give a small chance to spawn a smog cloud */
			if (this.smogTimer.delta() >= 0)
			{
				spawnCloud = Math.floor(Math.random()*100);
				if (spawnCloud <= 12)
				{
					if (this.flip)
						ig.game.spawnEntity(EntitySmokemanbosscloud, this.pos.x, this.pos.y, {flip: this.flip, lifespan: 'shortlife', velocityX: -10, velocityY: -25});
					else
						ig.game.spawnEntity(EntitySmokemanbosscloud, this.pos.x, this.pos.y, {flip: this.flip, lifespan: 'shortlife', velocityX: 10, velocityY: -25});
				}
				this.smogTimer.set(.1);
			}
			
			/* update our shots if we're in a shooting animation */
			if (this.actionState == 'quickshot')
			{
				if (this.actionTimer.delta() <= 0.15 && this.numberShots == 0)
				{
					this.numberShots++;
					if (this.flip)
						ig.game.spawnEntity(EntitySmokemanbosscog, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -19, shiftY: 9, velocityX: -200, velocityY: 0});
					else
						ig.game.spawnEntity(EntitySmokemanbosscog, this.pos.x, this.pos.y, {flip: this.flip, shiftX: 33, shiftY: 9, velocityX: 200, velocityY: 0});
				}
			}
			else if (this.actionState == 'runshot')
			{
				if (this.actionTimer.delta() <= 0.45 && this.numberShots == 0)
				{
					this.numberShots++;
					if (this.flip)
					{
						ig.game.spawnEntity(EntitySmokemanbosscog, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -19, shiftY: 9, velocityX: -200, velocityY: 0});
						this.accel.x = -30;
						this.friction.x = 30;
					}
					else
					{
						ig.game.spawnEntity(EntitySmokemanbosscog, this.pos.x, this.pos.y, {flip: this.flip, shiftX: 33, shiftY: 9, velocityX: 200, velocityY: 0});
						this.accel.x = -30;
						this.friction.x = 30;
					}
				}
			}
			else if (this.actionState == 'jumpshot')
			{
				if (this.actionTimer.delta() >= -1.8 && this.numberShots == 0)
				{
					this.numberShots++;
					if (this.flip)
						ig.game.spawnEntity(EntitySmokemanbosscog, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -19, shiftY: 9, velocityX: -200, velocityY: 200});
					else
						ig.game.spawnEntity(EntitySmokemanbosscog, this.pos.x, this.pos.y, {flip: this.flip, shiftX: 33, shiftY: 9, velocityX: 200, velocityY: 200});
				}
				else if  (this.actionTimer.delta() >= -1.0 && this.numberShots == 1)
				{
					this.numberShots++;
					if (this.flip)
						ig.game.spawnEntity(EntitySmokemanbosscog, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -19, shiftY: 9, velocityX: -200, velocityY: 100});
					else
						ig.game.spawnEntity(EntitySmokemanbosscog, this.pos.x, this.pos.y, {flip: this.flip, shiftX: 33, shiftY: 9, velocityX: 200, velocityY: 100});
				}
				else if  (this.actionTimer.delta() >= -0.2 && this.numberShots == 2)
				{
					this.numberShots++;
					if (this.flip)
						ig.game.spawnEntity(EntitySmokemanbosscog, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -19, shiftY: 9, velocityX: -200, velocityY: 25});
					else
						ig.game.spawnEntity(EntitySmokemanbosscog, this.pos.x, this.pos.y, {flip: this.flip, shiftX: 33, shiftY: 9, velocityX: 200, velocityY: 25});
				}
			}
			else if (this.actionState == 'summonsmoke')
			{
				// summon a bunch o' smog for the summon smog attack
				if (this.actionTimer.delta() >= -0.6 && this.numberShots == 0)
				{
					this.numberShots++;
					ig.game.spawnEntity(EntitySmokemanbosscloud, this.pos.x, this.pos.y, {flip: this.flip, lifespan: 'shortlife', velocityX: 40, velocityY: 0});
					ig.game.spawnEntity(EntitySmokemanbosscloud, this.pos.x, this.pos.y, {flip: this.flip, lifespan: 'shortlife', velocityX: 32, velocityY: -12});
					ig.game.spawnEntity(EntitySmokemanbosscloud, this.pos.x, this.pos.y, {flip: this.flip, lifespan: 'shortlife', velocityX: 23, velocityY: -35});
					ig.game.spawnEntity(EntitySmokemanbosscloud, this.pos.x, this.pos.y, {flip: this.flip, lifespan: 'shortlife', velocityX: 10, velocityY: -50});
					ig.game.spawnEntity(EntitySmokemanbosscloud, this.pos.x, this.pos.y, {flip: this.flip, lifespan: 'shortlife', velocityX: -10, velocityY: -50});
					ig.game.spawnEntity(EntitySmokemanbosscloud, this.pos.x, this.pos.y, {flip: this.flip, lifespan: 'shortlife', velocityX: -23, velocityY: -35});
					ig.game.spawnEntity(EntitySmokemanbosscloud, this.pos.x, this.pos.y, {flip: this.flip, lifespan: 'shortlife', velocityX: -32, velocityY: -12});
					ig.game.spawnEntity(EntitySmokemanbosscloud, this.pos.x, this.pos.y, {flip: this.flip, lifespan: 'shortlife', velocityX: -40, velocityY: 0});		
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
				else /* if we're done doing anything but running or spawning (or dying)*/
				{
					this.previousActionState = this.actionState;
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
				if (newAction <= 20) 
				{
					// Walk toward Player
					this.setFlipByPlayerPos();
					this.actionState = 'walk';
					this.currentAnim = this.anims.walk.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(Math.floor(Math.random()*3));
					this.vel.x = this.walkVelocity * this.velocityScale;
					this.vel.y = 0;
					this.gravityFactor = 1;
				}
				else if (newAction <= 35)
				{
					// Snap off a quick shot in player's direction
					if(this.previousActionState != 'quickshot') {
					this.setFlipByPlayerPos();
					this.actionState = 'quickshot';
					this.numberShots = 0;
					this.currentAnim = this.anims.quickshot.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(0.3);
					this.vel.x = 0;
					this.vel.y = 0;
					this.gravityFactor = 1;
					} else {
						this.setNextAction();
					}
				}
				else if (newAction <= 50)
				{
				  	// Shoot once at the middle of a run movement
					if(this.previousActionState != 'runshot' && this.standing) {
				  	this.setFlipByPlayerPos();
					this.actionState = 'runshot';
					this.numberShots = 0;
					this.currentAnim = this.anims.runshot.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(0.75);
					this.vel.x = this.walkVelocity * this.velocityScale;
					this.vel.y = 0;
					this.gravityFactor = 1;
					} else {
						this.setNextAction();
					}
				}
				else if (newAction <= 65)
				{
					// Take a series of shots at the player from the air on the way down
					// after touching the ceiling, while jumping away from the player
					// Make sure we never ninjajump twice in a row
					if (this.previousActionState != 'jumpshot' && this.standing)
					{
					// Ninjajump toward Player
					this.setFlipByPlayerPos();
					this.actionState = 'jumpshot';
					this.numberShots = 0;
					this.currentAnim = this.anims.jumpshot.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(3.0);
					this.vel.x = this.jumpShotVelocityX * -this.velocityScale;
					this.vel.y = -this.jumpShotVelocityY;
					this.gravityFactor = 0.25;
					}
					else
						this.setNextAction();
				}
				else if (newAction <= 75)
				{
					// Summon smoke from the stacks in the room.
					if (this.previousActionState != 'summonsmoke')
					{
					this.actionState = 'summonsmoke';
					this.numberShots = 0;
					this.currentAnim.flip.x = this.flip;
					this.currentAnim = this.anims.summonsmoke.rewind();
					this.actionTimer.set(1.2);
					this.vel.x = 0;
					this.vel.y = 0;
					this.gravityFactor = 1;
					}
				}
				else if (newAction <= 90)
				{
					// Make sure we never ninjajump twice in a row
					if (this.previousActionState != 'ninjajump' && this.standing)
					{
					// Ninjajump toward Player
					this.setFlipByPlayerPos();
					this.actionState = 'ninjajump';
					this.currentAnim = this.anims.ninjajump.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(1.5);
					this.vel.x = this.ninjaJumpVelocityX * this.velocityScale;
					this.vel.y = -this.ninjaJumpVelocityY;
					this.gravityFactor = 0.5;
					}
					else
						this.setNextAction();
				}
				else 
				{
					// Make sure we never idle twice in a row
					if (this.previousActionState != 'idle')
					{
						// Idle for a (short) while
						this.setFlipByPlayerPos();
						this.actionState = 'idle';
						this.currentAnim = this.anims.idle;
						this.currentAnim.gotoRandomFrame();
						this.actionTimer.set(Math.floor(Math.random()*2));
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
		kill: function(){
			_gaq.push(["_trackEvent", "Bosses", "Defeated", "Smoke Man", undefined, true]);
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