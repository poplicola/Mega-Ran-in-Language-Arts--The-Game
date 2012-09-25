ig.module('game.entities.activator')
.requires('impact.entity')
.defines(function() {
	EntityActivator = ig.Entity.extend({
		size: {x: 16, y: 16},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		gravityFactor: 0,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(196, 0, 255, 0.7)',
		init: function(x,y,settings) {
			this.parent(x,y,settings);
		},
		triggerActivated: function(other) {

		}
	});
});
