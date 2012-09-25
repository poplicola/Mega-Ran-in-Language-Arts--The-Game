ig.module(
	'game.entities.Pickup'
)
.requires(
	'impact.entity'
)
.defines(function() {
	EntityPickup= ig.Entity.extend({
		vel: {x: 0, y:0},
		offset: {x: 0, y: 0},
		size: {x:16, y:16},
		gravityFactor: 1,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.FIXED,
		zIndex: -100,
		init: function(x,y,settings){
			this.parent(x,y,settings);
			this.addAnim("idle", 1, [this.style], true);
		},
		check: function(other) {
			if(other == ig.game.player) {
				ig.game.player.getItem(this);
				_gaq.push(["_trackEvent", "Items", "Get", this.storage_name(), undefined, true]);
				/* TODO: Add textbox */
				this.kill();
			}
		},
		update: function(){
			if(window.wm == undefined && this.storage_name()!=undefined && ig.game.gameState.collectables[this.storage_name()]  != undefined) {
				/* We're a unique item, and the player has already picked us up. */
				this.kill();
			}
			this.parent();
		},
		storage_name: function(){
			return "defaultPickup";
		}
	});
});