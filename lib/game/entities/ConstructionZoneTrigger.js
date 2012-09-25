ig.module('game.entities.ConstructionZoneTrigger')
.requires('impact.entity')
.defines(function() {
	EntityConstructionZoneTrigger = ig.Entity.extend({
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
			this.parent(x,y,settings);
		},
		check: function(other) {
			if(other == ig.game.player) {
				if(this.target[0] != undefined && this.zone==undefined){
					this.zone = ig.game.getEntityByName(this.target[0]);
				}
				if(this.zone == undefined){
					this.kill();
				}
				/* Make sure the zone has an interface set up. */
				if(this.zone.target[0] != undefined && this.zone.interface == undefined)
				{
					this.zone.interface = ig.game.getEntityByName(this.zone.target[0]);
				}
				if(this.zone.interface == undefined)
					return;
				this.zone.interface.zone = this.zone;
				/* Everything is set up now. */
			}
		},
		update: function() {
			if(ig.game.player != undefined && this.zone != undefined && this.zone.interface != undefined){
				this.zone.interface.activated = this.touches(ig.game.player);
				if(this.zone.interface.activated){
					if(ig.input.pressed('fire')){
						this.zone.interface.select();
					}
				} 
				
			}
		}
	});
});
