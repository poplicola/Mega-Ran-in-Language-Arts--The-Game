ig.module('game.entities.ElevatorLimitChangeTrigger')
.requires('game.entities.trigger')
.defines(function() {
	EntityElevatorLimitChangeTrigger= EntityTrigger.extend({
		triggered: false,
		size: {x: 160, y: 240},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(0, 255, 0, 0.2)',
		init: function(x,y,settings) {
          	this.parent(x,y,settings);
			if(!this.name)
				this.name = "ElevatorLimitChangeTrigger@("+x+","+y+")";
		},
		update: function() {
			if(ig.game.player != undefined && this.touches(ig.game.player)) {
				if(this.target) {
					for(t in this.target) {
						target = ig.game.getEntityByName(this.target[t]);
						if(this.preferredY)
							target.preferredY = this.preferredY;
						if(this.maxY)
							target.maxY = this.maxY;
						if(this.minY)
							target.minY = this.minY;
					}
				}
			}
			this.parent();
		},
		check: function() {
         /* Don't do anything, all handled in update() */
		}
	});
});
