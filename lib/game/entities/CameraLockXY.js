ig.module('game.entities.CameraLockXY')
.requires('game.entities.trigger')
.defines(function() {
	EntityCameraLockXY = EntityTrigger.extend({
		size: {x: 320, y: 240},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(0, 0, 255, 0.4)',
		init: function(x,y,settings) {
          	this.parent(x,y,settings);
			if(!this.name)
				this.name = "CameraLockXY@("+x+","+y+")";
			this.target[1] = this.name;
		},
		triggerActivated: function() {
			if(!ig.game.cameraFlipped) {
				ig.game.cameraStop = true;
            	ig.game.screen.y = this.pos.y;
				ig.game.screen.x = this.pos.x;
				ig.game.cameraFlipped = true;
			}
		}
	});
});
