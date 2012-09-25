ig.module('game.entities.DeathZone')
.requires('impact.entity')
.defines(function() {
	EntityDeathZone = ig.Entity.extend({
		size: {x: 16, y: 16},
		gravityFactor: 0,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.FIXED,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(196, 0, 0, 0.7)',
		zIndex: -100,
		init: function(x,y,settings) {
			this.parent(x,y,settings);
		},
		check: function(other) {
			if(other == ig.game.player) {
				ig.game.player.kill();
			}
		}
	});
});
