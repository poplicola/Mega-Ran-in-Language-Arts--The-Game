ig.module('game.entities.HorizontalDoor')
.requires('impact.entity')
.defines(function() {
	EntityHorizontalDoor= ig.Entity.extend({
		needsToOpen: false,
		active: true,
		size: {x: 64, y:10},
		collides: ig.Entity.COLLIDES.FIXED,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		gravityFactor:0,
		animSheet: new ig.AnimationSheet('media/HorizontalDoor.png', 64, 10),
		init: function(x,y,settings) {
			this.addAnim('locked', 0.5, [12]);
			this.addAnim('closed', 0.5, [0]);
			this.addAnim('open', 0.5, [11]);
			this.addAnim('opening', 0.05, [0,1,2,3,4,5,6,7,8,9,10,11], true);
			this.addAnim('closing', 0.05, [11,10,9,8,7,6,5,4,3,2,1,0], true);
			this.currentAnim = this.anims.closed;
			this.parent(x,y,settings);
		},
		update: function() {
			if(!this.active) {
             	this.currentAnim = this.anims.locked;
				this.collides = ig.Entity.COLLIDES.FIXED;
			} else {
				if(this.currentAnim == this.anims.closed) {
					if(this.active && this.needsToOpen) {
						this.currentAnim = this.anims.opening.rewind();
					}
				} else if (this.currentAnim == this.anims.open) {
					if(!this.needsToOpen) {
						this.currentAnim = this.anims.closing.rewind();
					}
				} else if(this.currentAnim == this.anims.closing) {
					if(this.currentAnim.loopCount > 0) {
						this.currentAnim = this.anims.closed;
						this.collides = ig.Entity.COLLIDES.FIXED;
					}
				}
				else if (this.currentAnim == this.anims.opening)
				{
					if(this.currentAnim.loopCount > 0) {
						this.currentAnim = this.anims.open;
						this.collides = ig.Entity.COLLIDES.NEVER;
					}
				} else {
                 	this.currentAnim = this.anims.closed;
				}
			}
			this.parent();
		},
		triggerActivated: function(other) {
        	this.active = !this.active;
		}
	});
});
