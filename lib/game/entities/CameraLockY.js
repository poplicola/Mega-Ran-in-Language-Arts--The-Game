ig.module('game.entities.CameraLockY')
.requires('game.entities.trigger')
.defines(function() {
	EntityCameraLockY = EntityTrigger.extend({
		size: {x: 148, y: 240},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(196, 255, 0, 0.5)',
		init: function(x,y,settings) {
          	this.parent(x,y,settings);
			if(!this.name) {
             	this.name = "CameraLockY@("+x+","+y+")";
			}
			this.target[1] = this.name;
		},
		triggerActivated: function() {
			if(!ig.game.cameraFlipped) {
				ig.game.screen.y = this.pos.y;
				ig.game.cameraFlipped=true;
			}

		}
	});
});
