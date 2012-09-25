ig.module('game.entities.SlidingDoor')
.requires('impact.entity')
.defines(function() {
	EntitySlidingDoor= ig.Entity.extend({
		
		doorOpenSFX: new ig.Sound('media/audio/doorOpen.*'),
		doorCloseSFX: new ig.Sound('media/audio/doorClose.*'),
		
		needsToOpen: false,
		active: true,
		size: {x: 10, y:48},
		collides: ig.Entity.COLLIDES.FIXED,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.BOTH,
		gravityFactor:0,
		animSheet: new ig.AnimationSheet('media/slidingdoor.png', 10, 48),
		init: function(x,y,settings) {
			this.addAnim('locked', 0.5, [10]);
			this.addAnim('closed', 0.5, [0]);
			this.addAnim('open', 0.5, [9]);
			this.addAnim('opening', 0.05, [0,1,2,3,4,5,6,7,8,9], true);
			this.addAnim('closing', 0.05, [9,8,7,6,5,4,3,2,1,0], true);
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
						this.doorOpenSFX.play();
					}
				} else if (this.currentAnim == this.anims.open) {
					if(!this.needsToOpen) {
						this.currentAnim = this.anims.closing.rewind();
						this.doorCloseSFX.play();
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
