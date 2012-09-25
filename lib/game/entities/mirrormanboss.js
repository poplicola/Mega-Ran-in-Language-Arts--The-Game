ig.module('game.entities.mirrormanboss')
.requires('game.entities.bossenemy')
.defines(function() {
	EntityMirrormanboss = EntityBossenemy.extend({
		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		walkVelocity: 80,
		floatVelocity: 35,
		jumpturnVelocity: 100,
		jumpposeVelocityX: 120, 
		jumpposeVelocityY: 220,
		summonspawnVelocityX: 40,
		summonspawnVelocityY: 100,
		velocityScale: 1,
		gravityFactor: 0,
		maxHealth:100,
		anchorPoint: {x: 0, y: 0},
		vel: {x: 0, y:0},
		size: {x: 22, y:30},
		maxVel: {x:200, y:800},	
		offset: {x:13, y:18},
		friction: {x:0, y:0},
		animSheet: new ig.AnimationSheet('media/mirrormanboss.png', 48,48),
		actionState: 'dropfromcieling',
		previousActionState: 'none', 
		portrait: new ig.Image("media/Portrait_Mirror.png"),
		jumpturnFlipped: false,
		isRealBoss: false,
		spawner:false,
		init: function(x,y,settings)
		{
			this.actionTimer = new ig.Timer(),  
			this.addAnim('idle', 0.15, [0,0,0,3,3,0,0,3,3,0]);
			this.addAnim('strikeapose', 0.15, [1,7,7]);
			this.addAnim('slowskate', 0.15, [1,2,3,2]);
			this.addAnim('fastskate', 0.075, [1,2,3,2]);
			this.addAnim('jumpturn', 0.15, [1,3,5,6,1], true);
			this.addAnim('jumppose', 0.15, [1,3,5,6,5,6,5,6,7], true);
			this.addAnim('summonpose', 0.10, [0,0,0,4,7,8,7,8,9,8,9,10,9,10,10,8],true);
			this.addAnim('summonspawn', 0.10 , [1,3,5,6,5]);
			this.addAnim('dropfromcieling', .25, [5,5,5,5,5,5,5,5,5,5,5,5,4,4,4,4,1,1,1,1,0], true);
			this.addAnim('powerup', 0.1, [1,1,7,7,8,7,8,9,8,9,8,9,10,9,10,10,9,8,9,10,9,10,9,8,9,8,7,8,7,7], true);
			this.anchorPoint.x = x;
			this.anchorPoint.y = y;
			this.parent(x,y,settings);
			this.reset = true;
			if (settings.isRealBoss)
			{
				this.isRealBoss = true;
				this.health = 100;
				this.maxHealth = 100;
				this.flip = true;
				
				this.actionState = 'dropfromcieling';
				this.currentAnim = this.anims.dropfromcieling;
				this.currentAnim.flip.x = this.flip;
				this.actionTimer.set(6);
				this.vel.y = this.floatVelocity;
			}
			else
			{
				this.isRealBoss = false;
				this.health = 10;
				this.maxHealth = 10;
				this.flip = settings.flip;
				this.xpVal = 0;
				
				this.setVelocityScaleByFlip();
				this.previousActionState = 'summonpose';
				this.actionState = 'summonspawn';
				this.currentAnim = this.anims.summonspawn.rewind();
				this.currentAnim.flip.x = this.flip;
				this.actionTimer.set(0.5);
				this.vel.x = this.summonspawnVelocityX * this.velocityScale;
				this.vel.y = -this.summonspawnVelocityY;
				this.gravityFactor = 1;
			}
		},
		kill: function() {
			if(this.isRealBoss){
				_gaq.push(["_trackEvent", "Bosses", "Defeated", "Mirror Man", undefined, true]);
				doors=ig.game.getEntitiesByType(EntityBossDoor);
				for(i=0;i<doors.length;i++){
					doors[i].active=true;
				}
				flashes=ig.game.getEntitiesByType(EntityBossdamageflash);
				for(i=0;i<flashes.length;i++){
					flashes[i].kill();
				}
			} 
			this.parent();
		},
		update: function() 
		{	
			if(this.dying)
				return;
			/* if we're touching the player, set us to active */
			this.collides = ig.Entity.COLLIDES.PASSIVE;
			if (ig.game.getEntityByName('megaran') != undefined)
			{
				if (ig.game.getEntityByName('megaran').touches(this))
					this.collides = ig.Entity.COLLIDES.ACTIVE;
				for (i=0; i<ig.game.getEntitiesByType(EntityProjectile).length; i++)
					if (ig.game.getEntitiesByType(EntityProjectile)[i].touches(this))
						this.collides = ig.Entity.COLLIDES.ACTIVE;
			}
			
			/* update our jumpturn to flip our image on the right frame */
			if (this.actionState == 'jumpturn')
			{
				if (!this.jumpturnFlipped && this.actionTimer.delta() >= -0.15)
				{
					this.flip = !this.flip;
					this.currentAnim.flip.x = this.flip;
					this.jumpturnFlipped = true;
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
				else if (this.actionState == 'summonpose')
				{
					/* if we're through the summon anim, summon a buddy and bounce us away */
					settings = {flip: !this.flip, isRealBoss: false};
					ig.game.spawnEntity(EntityMirrormanboss, this.pos.x, this.pos.y, settings);
					
					this.previousActionState = this.actionState;
					this.actionState = 'summonspawn';
					this.currentAnim = this.anims.summonspawn.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(0.5);
					this.vel.x = this.summonspawnVelocityX * this.velocityScale;
					this.vel.y = -this.summonspawnVelocityY;
					this.gravityFactor = 1;
				}
				else /* if we're done doing anything but summoning or spawning */
				{
					this.jumpturnFlipped = false;
					this.previousActionState = this.actionState;
					if (this.isRealBoss)
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
			/* Test for summonpose first, set summon chance by number of mirrormen */
			if (this.isRealBoss)
				if (this.testForSummon())
					return;
			
			/* not summoning something? skate and jump and pose like an idiot! */
			newAction = Math.floor(Math.random()*100);
			if (this.isRealBoss ? newAction <= 25 : newAction <= 20) 
			{
				// Skate slowly towards the player
				this.setFlipByPlayerPos();
				this.actionState = 'slowskate';
				this.currentAnim = this.anims.slowskate.rewind();
				this.currentAnim.flip.x = this.flip;
				this.setVelocityScaleByFlip();
				this.actionTimer.set(Math.floor(Math.random()*3));
				this.vel.x = this.walkVelocity * this.velocityScale;
				this.vel.y = 0;
				this.gravityFactor = 1;
			}
			else if (this.isRealBoss ? newAction <= 50 : newAction <= 40)
			{
				if (this.previousActionState != 'fastskate')
				{
				// Skate quickly in the direction we're facing for 0.5, 1.0 or 1.5 seconds
				this.actionState = 'fastskate';
				this.currentAnim = this.anims.fastskate.rewind();
				this.currentAnim.flip.x = this.flip;
				this.setVelocityScaleByFlip();
				runFactor = Math.floor(Math.random()*3) + 1;
				this.actionTimer.set(runFactor * 0.5);
				this.vel.x = this.walkVelocity * this.velocityScale * 2;
				this.vel.y = 0;
				this.gravityFactor = 1;
				}
				else
					this.setNextAction();
			}
			else if (this.isRealBoss ? newAction <= 60 : newAction <= 60)
			{
				// Stayin' alive
				if (this.previousActionState != 'strikeapose')
				{
					this.setFlipByPlayerPos();
					this.actionState = 'strikeapose';
					this.currentAnim = this.anims.strikeapose.rewind();
					this.actionTimer.set(0.45);
					this.vel.x = 0;
					this.vel.y = 0;
					this.gravityFactor = 1;
				}
				else
					this.setNextAction();
			}
			else if (this.isRealBoss ? newAction <= 90 : newAction <= 80)
			{
				// Double salchow dropping into a struck pose
				if (this.previousActionState != 'jumppose')
				{
					this.actionState = 'jumppose';
					this.currentAnim = this.anims.jumppose.rewind();
					this.currentAnim.flip.x = this.flip;
					this.actionTimer.set(1.6);
					this.vel.x = this.jumpposeVelocityX * this.velocityScale;
					this.vel.y = -this.jumpposeVelocityY;
					this.gravityFactor = 0.8;
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
					this.actionTimer.set(1.5);
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
				this.isRealBoss ? this.velocityScale = -1 : this.velocityScale = -0.6;
			}
			else
			{
				if (this.flip == true)
					this.flip = false;
				this.isRealBoss ? this.velocityScale = 1 : this.velocityScale = 0.6;
			}
		},
		setVelocityScaleByFlip: function()
		{
			if (this.flip == true)
				this.isRealBoss ? this.velocityScale = -1 : this.velocityScale = -0.6;
			else
				this.isRealBoss ? this.velocityScale = 1 : this.velocityScale = 0.6;
		},
		turnTriggerActivated: function(){
			if (this.actionState != 'dropfromcieling' && 
				this.actionState != 'powerup' && 
				this.previousActionState != 'jumpturn' && 
				this.standing)
			{
				this.previousActionState = this.actionState;
				this.actionState = 'jumpturn';
				this.currentAnim = this.anims.jumpturn.rewind();
				this.currentAnim.flip.x = this.flip;
				this.actionTimer.set(0.75);
				this.vel.x = 0;
				this.vel.y = -this.jumpturnVelocity;
				this.gravityFactor = 1;
			}
		},
		testForSummon: function()
		{
			if (ig.game.getEntityByName('mirrormansummonzone') == undefined)
				return false;
			else if (!ig.game.getEntityByName('mirrormansummonzone').touches(this) ||
				!this.isRealBoss)
				return false;
				
			bossCount = ig.game.getEntitiesByType(EntityMirrormanboss).length;
			if (bossCount == 1 || bossCount == 2)
			{
				if ((Math.floor(Math.random()) * 100) <= 60 - (28 * bossCount))
				{
					this.previousActionState = this.actionState;
					this.actionState = 'summonpose';
					this.currentAnim = this.anims.summonpose.rewind();
					this.currentAnim.flip.x = this.flip;
					this.setVelocityScaleByFlip();
					this.actionTimer.set(1.6);
					this.vel.x = 0;
					this.vel.y = 0;
					this.gravityFactor = 1;
					
					return true;	// makin a duder, tell setNextAction to bail
				}
			}
			
			return false;
		}
	});
});
