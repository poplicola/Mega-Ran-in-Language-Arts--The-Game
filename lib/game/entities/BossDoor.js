ig.module(
	'game.entities.BossDoor'
)
.requires(
	'game.entities.SlidingDoor'
)
.defines(function() {
	EntityBossDoor = EntitySlidingDoor.extend({
		init: function(x,y,settings){
			settings.active=false;
			this.parent(x,y,settings);
			this.reset=true;
		}	
	});
});