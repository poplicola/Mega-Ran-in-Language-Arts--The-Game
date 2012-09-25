ig.module(
	'game.entities.PickupHealth'
)
.requires(
	'game.entities.Pickup'
)
.defines(function() {
	EntityPickupHealth = EntityPickup.extend({
		animSheet: new ig.AnimationSheet("media/PowerPellet.png", 12, 12),
		value:10,
		init: function(x,y,settings){
			this.parent(x,y,settings);
			if(this.value>10){
				this.size = {x:12, y:12};
				this.pos.y-=4;
				this.addAnim("idle", .1, [2,2,3]);
			} else {
				this.size = {x:8, y:8};
				this.addAnim("idle", .1, [0,0,1]);
			}
			this.currentAnim = this.anims.idle;
		},
		storage_name: function(){
			return "health:"+this.value+"HP";
		}
	});
});