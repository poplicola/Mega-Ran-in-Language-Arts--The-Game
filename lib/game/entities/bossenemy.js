ig.module('game.entities.bossenemy')
.requires('impact.entity', 'game.entities.bossdamageflash')
.defines(function() {
	EntityBossenemy = ig.Entity.extend({
		flip:false,
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.PASSIVE,
		vel: {x: 0, y:0},
		size: {x: 21, y:18},
		offset: {x: 0, y: 0},
		maxHealth: 200,
		health: 200,
		healthTile: 6,
		healthColors:{
			green: 0,
			yellow: 1,
			red: 2,
			blue: 3,
			purple: 4,
			gray: 6
		},
		xpVal: 100,
		invincibleTimer: new ig.Timer(),
		init: function(x,y,settings) {
			if(settings.healthbar != undefined){
				if(this.healthColors[settings.healthbar] != undefined)
					this.healthTile = this.healthColors[settings.healthbar];
			}
			this.dying = false;
			this.parent(x,y,settings);
		},
		update: function() {
			this.parent();
		},
		collideWith: function(other, axis) {
			// bail if we're currently invincible
			if (this.invincibleTimer.delta() <= 0)
				return;
			
			if(other.name == "bustershot") {
				this.invincibleTimer.set(1);
				if (this.name == 'smokemanboss')
					ig.game.spawnEntity(EntityBossdamageflash, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -12, shiftY: -12, attachedBoss: this});
				else if (this.name == 'mirrormanboss')
					ig.game.spawnEntity(EntityBossdamageflash, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -13, shiftY: -18, attachedBoss: this});
				else if (this.name == 'lasermanboss')
					ig.game.spawnEntity(EntityBossdamageflash, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -12, shiftY: -12, attachedBoss: this});
				else if (this.name == 'shadowfistboss')
				{
					ig.game.spawnEntity(EntityBossdamageflash, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -12, shiftY: 0, attachedBoss: this});
					ig.game.spawnEntity(EntityBossdamageflash, this.pos.x, this.pos.y, {flip: this.flip, shiftX: 12, shiftY: 12, attachedBoss: this});
					ig.game.spawnEntity(EntityBossdamageflash, this.pos.x, this.pos.y, {flip: this.flip, shiftX: -12, shiftY: 24, attachedBoss: this});
				}
				else
					ig.game.spawnEntity(EntityBossdamageflash, this.pos.x, this.pos.y, {flip: this.flip, attachedBoss: this});
				this.receiveDamage(ig.game.gameState.weaponPower, other);
				if(this.health <= 0)
					ig.game.gameState.experience = ig.game.gameState.experience + this.xpVal;
			}
			this.parent(other, axis);
		},
		kill: function() {
			this.parent();
		}
	});
});
