ig.module(
	'game.entities.WarpZone'
)
.requires(
	'game.entities.ActivatedZone'
)
.defines(function() {
	EntityWarpZone = EntityActivatedZone.extend({
		update: function(){
			this.active=true;
			this.parent();
		},
		activate: function(){
			if(this.destination != undefined){
				/* Find location of the destination */
				dest = ig.game.getEntityByName(this.destination);
				if(this.active && dest != undefined) 
				{
					dest.active = false;
					destX = dest.pos.x + dest.size.x/2-ig.game.player.size.x/2;
					destY = dest.pos.y + dest.size.y-ig.game.player.size.y;
					ig.game.player.pos = {x:destX, y:destY};
				}
			}
			this.parent();
		}
	});
});