ig.module(
	'game.entities.PickupBlueprint'
)
.requires(
	'game.entities.Pickup'
)
.defines(function() {
	EntityPickupBlueprint = EntityPickup.extend({
		size: {x:20, y:20},
		animSheet: new ig.AnimationSheet("media/Blueprint.png", 20, 20),
		init: function(x,y,settings){
			settings.style=0;
			this.parent(x,y,settings);
		},
		storage_name: function() {
			return "blueprint:"+this.name;
		}
	});
});