ig.module(
	'game.entities.PickupBook'
)
.requires(
	'game.entities.Pickup'
)
.defines(function() {
	EntityPickupBook = EntityPickup.extend({
		animSheet: new ig.AnimationSheet("media/Books.png", 16, 16),
		init: function(x,y,settings){
			this.style=0;
			this.bonus='health';
			this.value=10;
			this.parent(x,y,settings);
		}	,
			storage_name: function() {
				return "book:"+this.name;
			}
	});
});