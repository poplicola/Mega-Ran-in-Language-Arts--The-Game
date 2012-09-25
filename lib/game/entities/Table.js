ig.module('game.entities.Table')
.requires('impact.entity')
.defines(function() {
	EntityTable = ig.Entity.extend({
		size: {x: 16, y:16},
		gravityFactor:1,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.FIXED,
		animSheet: new ig.AnimationSheet('media/Table.png', 16, 16),
		init: function(x,y,settings) {
			this.addAnim('idle', 0.2, [0]);
			this.parent(x,y,settings);
		}
	});
});
