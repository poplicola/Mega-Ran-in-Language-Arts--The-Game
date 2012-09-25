ig.module(
	'game.entities.SmogCloud'
)
.requires(
	'game.entities.enemy'
)
.defines(function() {
	EntitySmogCloud = EntityEnemy.extend({
		size: {x: 14, y:14},
		offset: {x: 7, y:7},
		vel: {x:0, y:-10},
		gravityFactor:0,
		duration:5,
		collides: ig.Entity.COLLIDES.FIXED,
		spawner: false,
		animSheet: new ig.AnimationSheet('media/SmogCloud.png', 28, 28),
		init: function(x, y, settings) {
			this.parent(x,y,settings);
			this.addAnim("idle", .2, [0,1,2,3,4,5,2,3, 4, 5, 6,7,8], true);
			this.vel.y = -15;
		},
		update: function() {
			this.vel.y = -15;
			if(this.currentAnim.frame > 3)
				this.collides = ig.Entity.COLLIDES.NEVER;
			if(this.currentAnim.loopCount > 0)
				this.kill();
			this.parent();
		}
	});
});