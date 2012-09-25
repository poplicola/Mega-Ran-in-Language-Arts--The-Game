ig.module('game.entities.ActivatedZone')
.requires('impact.entity')
.defines(function() {
		EntityActivatedZone = ig.Entity.extend({
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(196, 0, 128, 0.7)',
		size: {x: 48, y:48},
		active:true,
		init: function(x, y, settings) {
			this.parent(x,y,settings);
		},
		update: function() {
			this.parent();
		},
		check: function(other) {
			if(ig.game.player != undefined && other == ig.game.player) {
				ig.game.actionText = this.actionText;
				ig.game.actionTextPos = {x: this.pos.x+this.size.x/2, y: this.pos.y};
				if(ig.input.pressed('up')) {
					this.activate();
				}
			}
			return this.parent(other);
		},
		activate: function() {
			
		}
	});
});
