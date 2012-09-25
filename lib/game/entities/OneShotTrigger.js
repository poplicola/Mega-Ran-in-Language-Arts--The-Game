ig.module('game.entities.OneShotTrigger')
.requires('impact.entity')
.defines(function() {
	EntityOneShotTrigger = ig.Entity.extend({
		triggered:false,
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
			settings.triggered=false;
			this.parent(x,y,settings);
//          	if(!(typeof wm === 'undefined')) {
//             	this.size = {x: 16, y:16};
//			}
		},
		resetfunc: function(){
			this.triggered = false;
		},
		check: function(other) {
			if(!this.triggered && other == ig.game.player) {
				for(t in this.target) {
					activator = ig.game.getEntityByName(this.target[t]);
					if(activator && activator.triggerActivated) 
					{
						activator.triggerActivated(this);
					}
				}
				this.triggered=true;
			}
		}
	});
});
