ig.module(
	'game.entities.Puffer'
)
.requires(
	'game.entities.flyer'
)
.defines(function() {
	EntityPuffer = EntityFlyer.extend({
		size: {x: 15, y:23},
		offset: {x: 0, y:0},
		vel: {x:0, y:0},
		gravityFactor:0,
		travelVelocity:10,
		collides: ig.Entity.COLLIDES.FIXED,
		animSheet: new ig.AnimationSheet('media/Puffer_Joe.png', 15, 31),
		init: function(x, y, settings) {
			this.parent(x,y,settings);
			this.addAnim("idle", .2, [0,1,2,3,2,1]);
		},
		update: function() {

			if(this.currentAnim.tile>=2)
				this.vel.y = -10;
			else
				this.vel.y = 10;
			this.parent();
			this.currentAnim.flip.x=this.flip;
		}
	});
});