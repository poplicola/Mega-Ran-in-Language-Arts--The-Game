ig.module('game.entities.PendantLamp')
.requires('impact.entity')
.defines(function() {
	EntityPendantLamp = ig.Entity.extend({
		size: {x: 16, y:24},
		gravityFactor:0,
		animSheet: new ig.AnimationSheet('media/pendantlamp.png', 16, 24),
		init: function(x,y,settings) {
			this.addAnim('idle', 0.2, [0,1,2,3,2,1]);
			this.parent(x,y,settings);
		}
	});
});
