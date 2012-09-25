ig.module('game.entities.enemy')
.requires('impact.entity', 'game.entities.PickupHealth', 'game.entities.PickupOneUp')
.defines(function() {
	EntityEnemy = ig.Entity.extend({
		
		enemyHitA: new ig.Sound('media/audio/enemyHitA.*'),
		enemyHitB: new ig.Sound('media/audio/enemyHitB.*'),
		enemyHitC: new ig.Sound('media/audio/enemyHitC.*'),
		
		flip:false,
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.ACTIVE,
		vel: {x: 0, y:0},
		size: {x: 21, y:18},
		offset: {x: 0, y: 0},
		deferredDamage:0,
		health: 20,
		xpVal: 2,
		spawner: true,
		update: function() {
			if(this.anims.flash != undefined){
				if(this.currentAnim == this.anims.flash && this.currentAnim.loopCount > 0)
				{
					this.receiveDamage(this.deferredDamage, undefined);
					this.deferredDamage = 0;
					if(this.health <= 0)
						ig.game.gameState.experience = ig.game.gameState.experience + this.xpVal;
					if(this.anims.idle != undefined){
						this.currentAnim = this.anims.idle;
					}
				}
			}
			this.parent();
		},
		collideWith: function(other, axis) {
			if(other.name == "bustershot") {
				rand=Math.floor(Math.random()*2);
				if (rand==0) 
					this.enemyHitA.play();
				else if (rand==1)
					this.enemyHitB.play();
				else
					this.enemyHitC.play();
				
				if(this.anims.flash != undefined)
				{	
					if(this.currentAnim != this.anims.flash){
						this.currentAnim = this.anims.flash.rewind();
					}
					this.currentAnim.flip.x = this.flip;
					/* Don't apply damage, it will be taken care of when transitioning out of the flash animation */
					this.deferredDamage = this.deferredDamage + ig.game.gameState.weaponPower;
				} else {
					this.receiveDamage(ig.game.gameState.weaponPower);
					if(this.health <= 0)
						ig.game.gameState.experience = ig.game.gameState.experience + this.xpVal;
				}
			}
			this.parent(other, axis);
		},
		kill: function() {
			if(this.spawner){
				itemSpawn = Math.floor(Math.random()*100);
				if(itemSpawn > 20) {
					/* No spawn */
				} else if (itemSpawn > 5) {
					ig.game.spawnEntity(EntityPickupHealth, this.pos.x, this.pos.y);
				} else if (itemSpawn > .1) {
					ig.game.spawnEntity(EntityPickupHealth, this.pos.x, this.pos.y, {value: 30});
				} else
				{	
					ig.game.spawnEntity(EntityPickupOneUp, this.pos.x, this.pos.y);
				}
			}
			if(this.deathTarget != undefined)
			{
				for(t in deathTarget){
						activator = ig.game.getEntityByName(this.deathTarget[t]);
						if(activator && activator.triggerActivated) 
						{
							activator.triggerActivated(this);
						}
				}
			}
			this.parent();
		}
	});
});
