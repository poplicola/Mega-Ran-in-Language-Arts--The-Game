ig.module('game.entities.ceilingdropper')
.requires('game.entities.ceilingwalker')
.defines(function() {
	EntityCeilingdropper = EntityCeilingwalker.extend({
		name: "ceilingdropper",
		vel: {x: 0, y:0},
		size: {x: 22, y:16},
		maxVel: {x:100, y:800},
		animSheet: new ig.AnimationSheet('media/CeilingWalker.png', 22,26),
		dropRange: 75,
		hitBoxes: [ { x: 22, y: 16},  
					{ x: 22, y: 16}, 
					{ x: 22, y: 19},
					{ x: 22, y: 25},
					{ x: 22, y: 24},
					{ x: 22, y: 18},
					{ x: 22, y: 17},
					{ x: 22, y: 16},
					{ x: 22, y: 16} ],
		init: function(x,y,settings) {
         	this.addAnim('idle', 0.1, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0]);
			this.addAnim('walk', 0.2, [0,2,3,4,5,6]);
			this.addAnim('drop', 0.2, [0]);
			this.addAnim('flash', 0.05, [7,8,7,8]);
			this.parent(x,y,settings);
		},
		update: function() {       
			this.size = this.hitBoxes[this.currentAnim.tile];

			if(this.actionState != 'drop') {
				if(ig.game.player) {
					playerDistance = Math.abs(ig.game.player.pos.x - this.pos.x); 
					if(ig.game.isOnScreen(this.pos) && playerDistance < this.dropRange &&
							ig.game.player.pos.y > this.pos.y) {
						this.gravityFactor=1;
						this.actionState = 'drop';
						this.vel.x=0;
						this.currentAnim = this.anims.drop;
					}
				}
			}
			if(this.health == 0 && this.currentAnim == this.anims.flash && this.currentAnim.loopCount > 0)
				this.kill();
        	this.parent();
		},
		handleMovementTrace: function(res) {
			/* if(res.collision.x)
				this.flip = !this.flip;
			*/
			if(this.actionState == 'drop' && this.vel.y > 0 && res.collision.y && this.currentAnim != this.anims.flash)
			{
    			this.health=0;
				this.currentAnim = this.anims.flash.rewind();
				this.currentAnim.flip.x = this.flip;
			}
			this.parent(res);
		}
	});
});
