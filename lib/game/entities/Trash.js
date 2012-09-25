ig.module(
	'game.entities.Trash'
)
.requires(
	'game.entities.object'
)
.defines(function() {
	EntityTrash = EntityObject.extend({
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.ACTIVE,
		vel: {x: 0, y:0},
		size: {x: 16, y:16},
		offset: {x: 0, y: 0},
		health: 30,
		xpVal: 0,
		bounciness: .4,
		damageFactor: {
			busterShot: 1
		},
		animSheet: new ig.AnimationSheet("media/Trash.png", 16, 16),
		init: function(x,y,settings)
		{
			this.addAnim("idle", 1, [Math.floor(Math.random()*3)]);
			this.parent(x,y,settings);
		},
		collideWith: function(other, axis) {
			/*if(axis == "y") {
				if(other instanceof EntityMegaran && other.pos.y < this.pos.y)
					this.kill();
			}*/
			this.parent(other, axis);
		}
	});
});