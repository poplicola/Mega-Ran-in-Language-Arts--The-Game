ig.module('game.entities.tinyturret')
.requires('game.entities.enemy', 'game.entities.tinyturretprojectile')
.defines(function() {
	EntityTinyturret = EntityEnemy.extend({
		collides: ig.Entity.COLLIDES.FIXED,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		gravityFactor: 0,
		health: 15,
		vel: {x: 0, y:0},
		size: {x: 14, y:11},
		maxVel: {x:300, y:800},
		offset: {x:6, y:8},
		friction: {x:1000, y:10},
		name: 'tinyturret',
		animSheet: new ig.AnimationSheet('media/tinyturret.png', 28, 20),
		actionState: 'cycle',
		actionTimer: null,
		velocityScale: 0,
		flip: true,
		verticalFlip: false,
		init: function(x,y,settings) {
			this.actionTimer = new ig.Timer();
			this.addAnim('cycle', 0.65, [0,1,2,3,4,3,2,1]);
			this.addAnim('damage', 0.02, [0,1,0,2,0,0,0,2,0,4,0,1,0,0,0,4,0,3,0,2,0,1]);
    		this.parent(x,y,settings);
    		this.actionState = 'cycle';
			this.currentAnim.flip.x = this.flip;
    		this.currentAnim = this.anims.cycle.rewind();
    		this.actionTimer.set(2);
    		if (settings.verticalFlip != undefined)
    			this.verticalFlip = settings.verticalFlip;
    		this.currentAnim.flip.y = this.verticalFlip;
    		if (this.verticalFlip)
    			this.offset.y -= 8;
		},
		update: function() {       
			if (ig.game.getEntityByName('megaran') != undefined)
			{
				if (ig.game.getEntityByName('megaran').pos.x <= this.pos.x) 
				{					
					if (this.flip == false)
					{
						this.flip = true;
						this.currentAnim.flip.x = this.flip;
					}
				}
				else
				{
					if (this.flip == true)
					{
						this.flip = false;
    					this.currentAnim.flip.x = this.flip;
					}
				}
			}

			// shoot as appropriate if timer is triggered
			// and player is relatively close
			if (ig.game.getEntityByName('megaran') == undefined)
				return;
			if (this.actionTimer.delta() >= 0 &&
				this.pos.x - 300 < ig.game.player.pos.x &&
				ig.game.player.pos.x < this.pos.x + 300 &&
				pos.y - 300 < ig.game.player.pos.y &&
				ig.game.player.pos.y < this.pos.y + 300)
			{
				if (this.actionState != 'cycle')
				{
					this.actionState = 'cycle';
					this.currentAnim.flip.x = this.flip;
    				this.currentAnim = this.anims.cycle.rewind();
    				this.actionTimer.set(2);
				}
				
				if (!this.verticalFlip)
				{
					if (this.flip)
					{
						if (this.currentAnim.frame == 0)
						{
							settings = {velocityX: -30, velocityY: 0};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x - 5, this.pos.y + 1, settings);
						}
						else if (this.currentAnim.frame == 1 || this.currentAnim.frame == 7)
						{
							settings = {velocityX: -26, velocityY: -10};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x - 4, this.pos.y + 1, settings);
						}
						else if (this.currentAnim.frame == 2 || this.currentAnim.frame == 6)
						{
							settings = {velocityX: -22, velocityY: -20};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x - 3, this.pos.y + 3, settings);
						}
						else if (this.currentAnim.frame == 3 || this.currentAnim.frame == 5)
						{
							settings = {velocityX: -16, velocityY: -26};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x - 3, this.pos.y + 4, settings);
						}
						else if (this.currentAnim.frame == 4)
						{
							settings = {velocityX: 0, velocityY: -30};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x, this.pos.y + 6, settings);
						}
					}
					else
					{
						if (this.currentAnim.frame == 0)
						{
							settings = {velocityX: 30, velocityY: 0};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x + 5, this.pos.y + 1, settings);
						}
						else if (this.currentAnim.frame == 1 || this.currentAnim.frame == 7)
						{
							settings = {velocityX: 26, velocityY: -10};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x + 4, this.pos.y + 1, settings);
						}
						else if (this.currentAnim.frame == 2 || this.currentAnim.frame == 6)
						{
							settings = {velocityX: 22, velocityY: -20};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x + 3, this.pos.y + 3, settings);
						}
						else if (this.currentAnim.frame == 3 || this.currentAnim.frame == 5)
						{
							settings = {velocityX: 16, velocityY: -26};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x + 3, this.pos.y + 4, settings);
						}
						else if (this.currentAnim.frame == 4)
						{
							settings = {velocityX: 0, velocityY: -30};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x, this.pos.y + 6, settings);
						}
					}
				}
				else
				{
					if (this.flip)
					{
						if (this.currentAnim.frame == 0)
						{
							settings = {velocityX: -30, velocityY: 0};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x - 5, this.pos.y + 1, settings);
						}
						else if (this.currentAnim.frame == 1 || this.currentAnim.frame == 7)
						{
							settings = {velocityX: -26, velocityY: -0};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x - 4, this.pos.y + 1, settings);
						}
						else if (this.currentAnim.frame == 2 || this.currentAnim.frame == 6)
						{
							settings = {velocityX: -22, velocityY: 20};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x - 3, this.pos.y + 3, settings);
						}
						else if (this.currentAnim.frame == 3 || this.currentAnim.frame == 5)
						{
							settings = {velocityX: -16, velocityY: 26};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x - 3, this.pos.y + 4, settings);
						}
						else if (this.currentAnim.frame == 4)
						{
							settings = {velocityX: 0, velocityY: 30};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x, this.pos.y + 6, settings);
						}
					}
					else
					{
						if (this.currentAnim.frame == 0)
						{
							settings = {velocityX: 30, velocityY: 0};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x + 5, this.pos.y + 1, settings);
						}
						else if (this.currentAnim.frame == 1 || this.currentAnim.frame == 7)
						{
							settings = {velocityX: 26, velocityY: 10};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x + 4, this.pos.y + 1, settings);
						}
						else if (this.currentAnim.frame == 2 || this.currentAnim.frame == 6)
						{
							settings = {velocityX: 22, velocityY: 20};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x + 3, this.pos.y + 3, settings);
						}
						else if (this.currentAnim.frame == 3 || this.currentAnim.frame == 5)
						{
							settings = {velocityX: 16, velocityY: 26};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x + 3, this.pos.y + 4, settings);
						}
						else if (this.currentAnim.frame == 4)
						{
							settings = {velocityX: 0, velocityY: 30};
							ig.game.spawnEntity(EntityTinyturretprojectile, this.pos.x, this.pos.y + 6, settings);
						}
					}
				}
				
				this.actionTimer.set(2);
			}
			
        	this.parent();
		},
		// hacky collideWith because enemy.js does not account for vertical flips
		collideWith: function(other, axis) {
			if(other.name == "bustershot") {
				rand=Math.floor(Math.random()*2);
				if (rand==0) 
					this.enemyHitA.play();
				else if (rand==1)
					this.enemyHitB.play();
				else
					this.enemyHitC.play();
					
			this.currentAnim = this.anims.damage.rewind();
			this.currentAnim.flip.x = this.flip;
			this.currentAnim.flip.y = this.verticalFlip;
			this.actionTimer.set(0.44);
			this.actionState = 'damage';
			
			// hack, no deferred damage
			this.receiveDamage(ig.game.gameState.weaponPower);
					if(this.health <= 0)
						ig.game.gameState.experience = ig.game.gameState.experience + this.xpVal;
			}
		},
	});
});