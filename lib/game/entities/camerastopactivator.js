ig.module('game.entities.camerastopactivator')
.requires('game.entities.activator')
.defines(function() {
	EntityCamerastopactivator = EntityActivator.extend({
		size: {x: 16, y: 16},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(196, 0, 255, 0.25)',
		init: function(x,y,settings) {
			this.orig_pos = {x:x, y:y};
			this.parent(x,y,settings);
		},
		triggerActivated: function() {
			/* Skip this if we're already stopped */
//			if(ig.game.cameraStop)
//				return;
			ig.game.cameraStop = true;
			ig.game.screen.x = this.pos.x;
			ig.game.screen.y = this.pos.y;
		}
	});
});
