ig.module('game.entities.MirrorManTurnTrigger')
.requires('impact.entity')
.defines(function() {
	EntityMirrorManTurnTrigger = ig.Entity.extend({
		triggered:false,
		inTriggerBox: false,
		size: {x: 16, y: 16},
		target: {},
		gravityFactor: 0,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(0, 255, 255, 0.7)',
		zIndex: -100,
		init: function(x,y,settings) {
			settings.triggered=false;
			this.parent(x,y,settings);
		},
		check: function(other) {
			if (ig.game.getEntityByName('mirrormanboss') == undefined)
				return;
			else if(!this.triggered && other instanceof EntityMirrormanboss && !this.inTriggerBox) {
				for(t in this.target) {
					activator = ig.game.getEntityByName(this.target[t]);
					if(activator && activator.turnTriggerActivated) 
					{
						activator.turnTriggerActivated(this);
					}
				}
				this.triggered=true;
				this.inTriggerBox=true;
			}
		},
		update: function() {
			if (ig.game.getEntityByName('mirrormanboss') != undefined)
			{
				if(this.triggered)
					this.triggered = false;
				if(!this.touches(ig.game.getEntityByName('mirrormanboss')) && this.inTriggerBox)
					this.inTriggerBox = false;
			}
		}
	});
});
