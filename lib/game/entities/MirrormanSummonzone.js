ig.module('game.entities.MirrormanSummonzone')
.requires('impact.entity')
.defines(function() {
	EntityMirrormanSummonzone = ig.Entity.extend({
		size: {x: 16, y: 16},
		target: {},
		name: 'mirrormansummonzone',
		gravityFactor: 0,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(0, 255, 255, 0.7)',
		zIndex: -100,
		init: function(x,y,settings) {
			settings.inTriggerBox=false;
			this.parent(x,y,settings);
		},
	});
});
