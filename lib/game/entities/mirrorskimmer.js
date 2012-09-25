ig.module('game.entities.mirrorskimmer')
.requires('game.entities.enemy')
.defines(function() {
	EntityMirrorskimmer = EntityEnemy.extend({
		collides: ig.Entity.COLLIDES.PASSIVE,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		roamVelocity: 30,
		chaseVelocity: 150,
		gravityFactor: 1,
		health: 150,
		vel: {x: 0, y:0},
		size: {x: 12, y:10},
		maxVel: {x:300, y:800},
		offset: {x:2, y:3},
		name: 'mirrorskimmer',
		animSheet: new ig.AnimationSheet('media/mirrorskimmer.png', 16, 13),
		actionState: 'roam',
		velocityScale: 0,
		actionTimer: null,       
		init: function(x,y,settings) {
			this.actionTimer = new ig.Timer();
			this.addAnim('roam', 0.15, [0,0,0,1,0,0,0,0,0,1]);
			this.addAnim('chase', 0.15, [1,1,0,1,1,0,1,1,0]);
			if (settings.movingLeft)
				this.velocityScale = -1;
			else
				this.velocityScale = 1;
    		this.parent(x,y,settings);
    		this.actionState = 'roam';
    		this.vel.x = this.roamVelocity * this.velocityScale;
    		this.currentAnim = this.anims.roam.rewind();
		},
		update: function() {       
			if (ig.game.getEntityByName('megaran') != undefined)
			{
				// goto chase mode when on the same y as player
				if (ig.game.getEntityByName('megaran').pos.y + ig.game.getEntityByName('megaran').size.y == this.pos.y + this.size.y)
				{
					this.actionState = 'chase';
					this.vel.x = this.chaseVelocity * this.velocityScale;
					this.currentAnim = this.anims.chase.rewind();
					this.actionTimer.set(2);
				}
			}
			
			if (this.actionTimer.delta() >= 0)
			{
				if (this.actionState != 'roam')
				{
					this.actionState = 'roam';
					this.vel.x = this.roamVelocity * this.velocityScale;
					this.currentAnim = this.anims.roam.rewind();
				}
			}
        	this.parent();
		},
		turnTriggerActivated: function(){
			this.velocityScale = -this.velocityScale;
			if (this.actionState == 'roam')
				this.vel.x = this.roamVelocity * this.velocityScale;
			else
				this.vel.x = this.chaseVelocity * this.velocityScale;
		},
	});
});