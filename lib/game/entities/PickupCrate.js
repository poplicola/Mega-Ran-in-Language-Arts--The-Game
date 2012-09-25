ig.module(
	'game.entities.PickupCrate'
)
.requires(
	'game.entities.Pickup'
)
.defines(function() {
	EntityPickupCrate = EntityPickup.extend({
		size: {x:20, y:20},
		animSheet: new ig.AnimationSheet("media/Crate.png", 20, 20),
		init: function(x,y,settings){
			settings.style=0;
			this.parent(x,y,settings);
		}	,
			storage_name: function() {
				return "material:"+this.name;
			}
	});
});