ig.module('game.entities.Checkpoint')
.requires('game.entities.trigger')
.defines(function() {
	EntityCheckpoint = ig.Entity.extend({
		size: {x: 16, y: 16},
		target: {},
		gravityFactor: 0,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(0, 255, 255, 0.7)',
		zIndex: -100,
		init: function(x,y,settings) {
			this.parent(x,y,settings);
		},
		check: function(other) {
			if(other == ig.game.player) {
				ig.game.respawnPosition.x = ig.game.player.pos.x;
				ig.game.respawnPosition.y = ig.game.player.pos.y;
				if(ig.game.boss){
					ig.game.boss.kill();
				}
			}
		}
	});
});
