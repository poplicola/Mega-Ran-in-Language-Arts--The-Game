ig.module(
	'game.entities.PickupOneUp'
)
.requires(
	'game.entities.Pickup'
)
.defines(function() {
	EntityPickupOneUp = EntityPickup.extend({
		animSheet: new ig.AnimationSheet("media/RanUp.png", 16, 16),
		init: function(x,y,settings){
			settings.style = 0;
			this.parent(x,y,settings);
		},
		storage_name: function() {
			return "1Up"; 
		}
	});
});