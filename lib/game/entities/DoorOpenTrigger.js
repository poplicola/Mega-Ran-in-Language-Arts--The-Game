ig.module('game.entities.DoorOpenTrigger')
.requires('impact.entity')
.defines(function() {
	EntityDoorOpenTrigger= ig.Entity.extend({
		triggered: false,
		size: {x: 160, y: 240},
		type: ig.Entity.TYPE.B,
		gravityFactor:0,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(0, 255, 0, 0.2)',
		init: function(x,y,settings) {
          	this.parent(x,y,settings);
			if(!this.name)
				this.name = "DoorOpenTrigger@("+x+","+y+")";
		},
		update: function() {
			if(ig.game.player != undefined) {
				if(this.target) {
					for(t in this.target) {
						target = ig.game.getEntityByName(this.target[t]);
						target.needsToOpen=this.touches(ig.game.player);
					}
				}
			}
			this.parent();
		}
	});
});
