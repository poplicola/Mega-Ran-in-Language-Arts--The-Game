ig.module('game.entities.ceilingwalker')
.requires('game.entities.enemy')
.defines(function() {
	EntityCeilingwalker = EntityEnemy.extend({
		collides: ig.Entity.COLLIDES.ACTIVE,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		travelVelocity: 23,
		gravityFactor: -1,
		health: 10,
		range: 150,
		anchorPoint: {x: 0, y: 0},
		vel: {x: 0, y:0},
		size: {x: 22, y:16},
		maxVel: {x:100, y:800},	
		offset: {x:0, y:0},
		actionState: 'idle',
		actionTimer: new ig.Timer(),                       
		idleChance: 50,
		init: function(x,y,settings) {
			this.anchorPoint.x = x;
			this.anchorPoint.y = y;
    		this.parent(x,y,settings);
		},
		update: function() {       
				if(this.actionTimer.delta() >= 0) {
					/* Choose new action */
					newAction = Math.floor(Math.random()*100);
					if(newAction < this.idleChance) {
						this.actionState = 'idle';
						this.currentAnim = this.anims.idle;
						this.currentAnim.gotoRandomFrame();
						this.vel.x=0;
					} else {
						if(this.actionState!='walk')
							this.anims.walk.rewind();
						this.currentAnim = this.anims.walk;
						this.actionState = 'walk';
					}
					this.actionTimer.set(Math.floor(Math.random()*8));
				}
				if(this.actionState == 'walk') {
					if(((this.anchorPoint.x - this.range) > this.pos.x) || ((this.anchorPoint.x + this.range) < this.pos.x))
						this.flip = !this.flip;
					if(this.flip)
						this.vel.x = -this.travelVelocity;
					else
						this.vel.x = this.travelVelocity;
				}
        	this.parent();
		}
	});
});
