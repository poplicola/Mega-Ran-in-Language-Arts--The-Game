ig.module('game.entities.Pedestal')
.requires('impact.entity')
.defines(function() {
	EntityPedestal = ig.Entity.extend({
		size: {x: 16, y:22},
		gravityFactor:1,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.NEVER,
		animSheet: new ig.AnimationSheet('media/pedestal.png', 16, 22),
		init: function(x,y,settings) {
			this.addAnim('idle', 0.2, [0]);
			this.parent(x,y,settings);
		}
	});
});
