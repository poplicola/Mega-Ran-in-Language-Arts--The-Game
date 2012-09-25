ig.module('game.entities.skimmerturntrigger')
.requires('impact.entity')
.defines(function() {
	EntitySkimmerturntrigger = ig.Entity.extend({
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
		_wmBoxColor: 'rgba(128, 255, 255, 0.7)',
		zIndex: -100,
		init: function(x,y,settings) {
			settings.triggered=false;
			this.parent(x,y,settings);
		},
		check: function(other) {
			if (ig.game.getEntityByName('mirrorskimmer') == undefined)
				return;
			else if(!this.triggered && other instanceof EntityMirrorskimmer && !this.inTriggerBox) {
				other.turnTriggerActivated();
				this.triggered=true;
				this.inTriggerBox=true;
			}
		},
		update: function() {
			if (ig.game.getEntityByName('mirrorskimmer') != undefined)
			{
				if(this.triggered)
					this.triggered = false;
				if(!this.touches(ig.game.getEntityByName('mirrorskimmer')) && this.inTriggerBox)
					this.inTriggerBox = false;
			}
		}
	});
});