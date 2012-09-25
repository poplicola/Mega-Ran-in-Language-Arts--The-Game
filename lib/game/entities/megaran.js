ig.module('game.entities.megaran')
.requires('impact.entity', "game.entities.projectile", "game.entities.enemy", "game.entities.object", "game.entities.PickupCrate","game.entities.PickupBlueprint","game.entities.PickupBook","game.entities.PickupHealth")
.defines(function() {
		EntityMegaran = ig.Entity.extend({
			
		deathSFX: new ig.Sound('media/audio/death.*'),
		damageSFX: new ig.Sound('media/audio/damageTaken.*'),
		jumpSFX: new ig.Sound('media/audio/ranSingleJump.*'),
		doubleJumpSFX: new ig.Sound('media/audio/ranDoubleJump.*'),
		ranLandsSFX: new ig.Sound('media/audio/ranLands.*'),
			
		startPosition: null,
		zIndex:100,
		name: "megaran",
		maxVel: {x:100, y:800},	
		accel: {x:0, y:0},
		friction: {x:1000, y:10},
		jumpDuration: 0,
		accelGround: 1000,
		accelAir:200,
		jump:204,
		jumpCount:0,
		flip:false,
		warping:1,
		collides: ig.Entity.COLLIDES.ACTIVE,
		type: ig.Entity.TYPE.A,
		checkAgainst: ig.Entity.TYPE.B,
		size: {x: 22, y:30},
		offset: {x: 2, y: 10},
		offsetLeft: {x: 9, y: 10},
		offsetRight: {x: 2, y: 10},
		health: 100,
		animSheet: new ig.AnimationSheet('media/Random.png', 32, 40),
		portrait: new ig.Image("media/Portrait_Ran.png"),
		invincible: true,
		invincibleDelaySpawn: 4.0,
		invincibleDelayNormal: 1.0,
		invincibleTimer: null,
		shootTimer: undefined,
		saveTimer: undefined,
		init: function(x, y, settings) {
			this.addAnim( 'run', 0.15, [6,7,8,7]);
			this.addAnim( 'idle', 0.1, [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]);
			this.addAnim( 'jump', 0.2, [9]);
			this.addAnim( 'warp', .1, [0], true);
			this.addAnim( 'standfire', .05, [5,10,10], true);
			this.addAnim( 'runfire', 0.15, [11,12,13,12]);
			this.addAnim( 'jumpfire', .05, [14,14,14], true);
			this.addAnim( 'warpout', .05, [2,1,0], true);
			this.addAnim( 'warpin', .05, [0,1,2,3], true);
			this.addAnim( 'damage', 0.05, [17,15,16,17,15,15,17,15,15,15], true);
			this.currentAnim=this.anims.warp;
			this.vel.y=800;
			this.startPosition = {x:x,y:y};
			this.last_action_jump = false;
			this.invincibleTimer = new ig.Timer();
			this.makeInvincible(this.invincibleDelaySpawn);
			this.parent(x,y,settings);
			ig.game.megaran = this;
			if(ig.game && ig.game.gameState && ig.game.gameState.maxHealth) {
				this.health = ig.game.gameState.maxHealth;
			}

		},
		fire: function() {
			if(ig.game.getEntitiesByType(EntityProjectile).length >= 3)
				return;
			pos = {x:this.pos.x, y:this.pos.y};
			if(this.standing) {
				if(this.currentAnim == this.anims.run) {
					this.anims.runfire.gotoFrame(this.currentAnim.frame);
					this.currentAnim = this.anims.runfire;
				} else {
					this.currentAnim = this.anims.standfire.rewind();
				}
				pos.y+=10;
			}
			else {
				this.currentAnim = this.anims.jumpfire.rewind();
				pos.y+=6;
			}
			if(this.flip) {
             	pos.x -= 5;
			} else {
             	pos.x += 29;
			}
			ig.game.spawnEntity(EntityProjectile, pos.x, pos.y, {flip: this.flip});
			this.currentAnim.flip.x = this.flip;
		},
		warpin: function() {
			//TODO: Position the sprite at the top of the current screen		
			this.warping = 1;
			this.currentAnim = this.anims.warp;
			this.vel.y = 800;
		},
		warpin_complete: function() {
			this.warping=0;
			this.currentAnim = this.anims.idle.rewind();
		},
		warpout: function() {
			this.warping = 2;
			this.currentAnim = this.anims.warpout.rewind();
			this.gravityFactor = 0;
		},
		warpout_complete: function() {
			this.warping=0;	
		},
		getItem: function(item) {
			if(item instanceof EntityPickupOneUp)
			{
				ig.game.gameState.lives++;
				ig.game.powerUp.play();
			} else if (item instanceof EntityPickupHealth)
			{
				ig.game.player.health = Math.min(ig.game.player.health + item.value, ig.game.gameState.maxHealth);
				ig.game.powerUp.play();
			} else if (item instanceof EntityPickupBlueprint)
			{
				ig.game.gameState.collectables["blueprint:"+item.name] = {type:"blueprint", name:item.name};
				ig.game.gameItem.play();
				
			} else if (item instanceof EntityPickupCrate){
				ig.game.gameState.collectables["material:"+item.name] = {type:"material", name:item.name};
				ig.game.gameItem.play();
			}
			else if (item instanceof EntityPickupBook)
			{
				ig.game.gameState.books.push({type:"book", name:item.name, bonus:item.bonus, value:item.value, image:item.style, read:0});
				ig.game.gameItem.play();
			}
		},  
		update: function() {
			if(this.flip)
				this.offset = this.offsetLeft;
			else
				this.offset = this.offsetRight;

			if(this.currentAnim == this.anims.damage && this.currentAnim.loopCount < 1) {
				/* We're taking damage.  As long as the animation is player, no user control */
				this.friction.x=0;
				this.parent();
				return;
			}

			this.friction.x=1000;
			this.collides = ig.Entity.COLLIDES.ACTIVE;
			var accel = this.standing ? this.accelGround : this.accelAir;		
			if(this.warping == 0) {
				if(ig.game.allowInput) {
					if(ig.input.state('left')) {
						if(this.vel.x > 0)
							this.vel.x = 0;
						this.accel.x = -accel;
						this.flip=true;
					} else if (ig.input.state('right')) {
						if(this.vel.x < 0)
							this.vel.x = 0;
						this.accel.x = accel;
						this.flip=false;
					} else {
						this.accel.x = 0;
					}
					
					if (this.standing && this.last_action_jump==true) {
						this.ranLandsSFX.play();
						this.last_action_jump=false;
					}
					
					if (this.vel.y>0)
						this.last_action_jump=true;
					
					if(this.standing && ig.input.pressed('jump')) {
						this.jumpSFX.play();
						this.jumpCount = 1;
						this.currentAnim = this.anims.jump;
						this.vel.y = -this.jump;
						this.last_action_jump = true;
					} else if (!this.standing && (ig.game.gameState.has_double_jump) && this.jumpCount == 1 && ig.input.pressed('jump')) {
						this.doubleJumpSFX.play();
						this.jumpCount = 2;
						this.currentAnim = this.anims.jump;
						this.vel.y = -this.jump;
					} else if (!this.standing && !ig.input.state('jump') && this.vel.y<0) {
						this.vel.y = 2*this.vel.y/3;
					}
				}
				else {
					this.vel.x=0;
					this.accel.x = 0;
				}
				
				if(!this.standing) {
					/* We're either jumping or falling. */
					if(this.jumpCount == 0)
						this.jumpCount = 1;
					if(this.currentAnim != this.anims.jumpfire || this.currentAnim.loopCount > 0) {
						this.currentAnim = this.anims.jump;
					}
				}
				else if(Math.abs(this.vel.x)>5) {
					if(this.currentAnim != this.anims.runfire || this.currentAnim.loopCount > 0) {
						this.currentAnim = this.anims.run;
					}
				}
				else if (this.currentAnim != this.anims.standfire || this.currentAnim.loopCount > 0)
					this.currentAnim = this.anims.idle;
				this.currentAnim.flip.x = this.flip;
			} else if(this.warping == 1) {
				if(this.standing)
				{
					if(this.currentAnim == this.anims.warp)
					{
						this.currentAnim = this.anims.warpin.rewind();
					} else if (this.currentAnim == this.anims.warpin && this.currentAnim.loopCount)
					{
						this.warpin_complete();
					}	
				}
			} else if(this.warping == 2) {
				if(this.currentAnim == this.anims.warpout && this.currentAnim.loopCount)
				{
					this.currentAnim = this.anims.warp;
					this.vel.y = -800;
				} else if (this.currentAnim == this.anims.warp && this.pos.y < 0) {
					this.warpout_complete();
				}
			}
			if (this.invincibleTimer.delta() >= 0) {
				this.invincible = false;
				this.currentAnim.alpha = 1;
			}
			this.parent();
		},
		handleMovementTrace: function(res) {
			if(this.warping == 2 || (this.warping == 1 && this.pos.y < 32)) {
				//We're warping, so we want to skip all of the collision checking
				this.pos.x += this.vel.x * ig.system.tick;
				this.pos.y += this.vel.y * ig.system.tick;
			} else {
				// Do normal static collision checking
				this.parent(res);
			}
		},
		collideWith: function(other, axis) {
			if(other instanceof EntityEnemy || other instanceof EntityBossenemy) {
				if (this.invincible)
					return this.parent(other, axis);
				this.damageSFX.play();
				this.makeInvincible(this.invincibleDelayNormal);
				if(!this.flip)
					ig.game.spawnEntity(EntityBossdamageflash, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -10, shiftY: -16, attachedBoss: this});
        		else
					ig.game.spawnEntity(EntityBossdamageflash, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -16, shiftY: -16, attachedBoss: this});
        		this.receiveDamage(10, other);
				this.currentAnim = this.anims.damage.rewind();
				this.vel.y=0;
				this.accel.x = 0;
				this.accel.y = 0;
				if(other.pos.x < this.pos.x) {
					/* Move right */
					this.vel.x = Math.abs(Math.max(this.maxVel.x, other.vel.x));
				} else {
					/* Move left */
					this.vel.x = -Math.abs(Math.max(this.maxVel.x, other.vel.x));
				}
				
				//this.collides = ig.Entity.COLLIDES.NEVER;
				this.currentAnim.flip.x = this.flip;
			} else if (other instanceof EntityObject) {
				if (this.invincible)
					return this.parent(other, axis);
        		vector = {x: (this.vel.x - other.vel.x), y: (this.vel.y - other.vel.y)};
				if(Math.sqrt(vector.x*vector.x + vector.y*vector.y) < 150)
					return this.parent(other, axis);
				
				this.receiveDamage(10, other);
				this.currentAnim = this.anims.damage.rewind();
				this.vel.y=0;
				this.accel.x = 0;
				this.accel.y = 0;
				if(this.vel.x >= 0)
					this.vel.x = -this.maxVel.x;
				else
					this.vel.x = this.maxVel.x;
//				this.collides = ig.Entity.COLLIDES.NEVER;
				this.currentAnim.flip.x = this.flip;
				other.kill();
			}
			this.parent(other, axis);
		},
		draw: function() {
			this.parent();
		},
		makeInvincible: function(time) {
			this.invincible = true;
			this.invincibleTimer.set(time);
		},
		onDeath: function() {
			_gaq.push(["_trackEvent", "Game Events", "Player Dies", undefined, undefined, true]);
			ig.game.gameState.deaths ++;
			ig.game.gameState.lives --;
			/* Is there a boss out there? */
			
			bosses = ig.game.getEntitiesByType(EntityBossenemy);
			for(i=0;i<bosses.length;i++)
			{
				bosses[i].dying=true;
				bosses[i].kill();
			}
			/* Check what needs to be reset */
			for(i=0;i<ig.game.entities.length;i++)
			{
				if(ig.game.entities[i].reset){
					ig.merge( ig.game.entities[i], ig.game.entities[i].orig_settings );
					ig.game.entities[i].resetfunc();
				}
				
			}
			if (ig.game.gameState.lives < 0) {
				ig.game.gameOver();
			} else {
				ig.game.spawnEntity(EntityMegaran, ig.game.respawnPosition.x, ig.game.respawnPosition.y);
			}
		},
		kill: function(){
			this.deathSFX.play();
			this.parent();
			ig.game.spawnEntity(EntityDeathExplosion, this.pos.x, this.pos.y, {callBack:this.onDeath});
			//ig.game.spawnEntity(EntityMegaran,this.startPosition.x, this.startPosition.y);
		},
	});
	
	EntityDeathExplosion = ig.Entity.extend({
		lifetime: 1,
		callBack: null,
		particles: 25,
		init: function(x,y,settings) {
			this.parent(x,y,settings);
			for(var i=0; i<this.particles;i++)
				ig.game.spawnEntity(EntityDeathExplosionParticle, x, y, {colorOffset: settings.colorOffset ? settings.colorOffset:0});
			this.idleTimer = new ig.Timer();
		},
		update: function() {
			if(this.idleTimer.delta() > this.lifetime) {
				this.kill();
				if(this.callBack)
					this.callBack();
					return;
			}
		}
	});
	
	EntityDeathExplosionParticle = ig.Entity.extend({
		size: {x:2, y:2},
		maxVel: {x:160, y:200},
		lifetime: 2,
		fadetime: 1,
		bounciness: 0,
		vel: {x:100, y:30},
		collides: ig.Entity.COLLIDES.LITE,
		colorOffset: 0,
		totalColors: 7,
		animSheet: new ig.AnimationSheet('media/explode.png', 2, 2),
		init: function(x, y, settings) {
			this.parent(x, y, settings);
			var frameID = Math.round(Math.random()*this.totalColors) + (this.colorOffset * (this.totalColors+1));
			this.addAnim('idle',0.2,[frameID]);
			this.vel.x = (Math.random() * 2 - 1) * this.vel.x;
			this.vel.y = (Math.random() * 2 - 1) * this.vel.y;
			this.idleTimer = new ig.Timer();
		},
		update: function() {
			if(this.idleTimer.delta() > this.lifetime) {
				this.kill();
				return;
			}
			this.currentAnim.alpha = this.idleTimer.delta().map(
				this.lifetime - this.fadetime, this.lifetime,
				1, 0
			);
			this.parent();
		}
	});
});
