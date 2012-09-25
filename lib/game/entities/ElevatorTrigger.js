ig.module('game.entities.ElevatorTrigger')
.requires('impact.entity')
.defines(function() {
	EntityElevatorTrigger= ig.Entity.extend({
		size: {x: 16, y: 16},
		target: {},
		gravityFactor: 0,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.B,
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
			if(other instanceof EntityElevator) {
				for(t in this.target) {
					target = ig.game.getEntityByName(this.target[t]);
					target.needsToOpen = true;
					target.active= true;
				}
			}
		}
	});
});
