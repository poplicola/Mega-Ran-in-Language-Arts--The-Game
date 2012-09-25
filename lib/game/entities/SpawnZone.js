ig.module('game.entities.SpawnZone')
.requires('impact.entity')
.defines(function() {
	EntitySpawnZone= ig.Entity.extend({
		size: {x: 16, y: 16},
		target: {},
		gravityFactor: 0,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(196, 255, 0, 0.7)',
		zIndex: -100,
		init: function(x,y,settings) {
			this.parent(x,y,settings);
//          	if(!(typeof wm === 'undefined')) {
//             	this.size = {x: 16, y:16};
//			}
		},
		check: function(other) {
			if(other == ig.game.player) {
				if(this.target && this.target[0] && this.type && this.name) {
                	/* Check if the dude is there, spawn him with our child settings. */
				}
			}
		}
	});
});
