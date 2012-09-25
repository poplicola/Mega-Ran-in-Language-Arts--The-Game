ig.module('game.entities.CautionLight')
.requires('impact.entity')
.defines(function() {
	EntityCautionLight = ig.Entity.extend({
		active:false,
		size: {x: 48, y:16},
		gravityFactor:0,
		animSheet: new ig.AnimationSheet('media/cautionlight.png', 48, 16),
		init: function(x,y,settings) {
			this.addAnim('idle', 0.05, [0,1,2,3,4,5,6,7,8,9,10,11,0,1,2,3,4,5,6,7,8,9,10,11]);
			this.addAnim('off', 5, [12]);
			this.parent(x,y,settings);
		},
		update: function() {
			if(this.active) {
             	this.currentAnim = this.anims.idle;
			} else {
             	this.currentAnim = this.anims.off;
			}
			this.parent();
		},
		triggerActivated: function() {
			this.active = !this.active;
		}
	});
});
