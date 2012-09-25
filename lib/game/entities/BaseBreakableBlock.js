ig.module('game.entities.BaseBreakableBlock')
.requires('impact.entity')
.defines(function() {
	EntityBaseBreakableBlock= ig.Entity.extend({
		size: {x: 32, y:32},
		collides: ig.Entity.COLLIDES.FIXED,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		gravityFactor:1,
		health: 3,
		animSheet: new ig.AnimationSheet('media/BaseBreakableBlock.png', 32, 32),
		init: function(x,y,settings) {
			this.addAnim("3", 2, [2]);
			this.addAnim("2", 2, [1]);
			this.addAnim("1", 2, [0]);
			this.currentAnim = this.anims[3];
			this.parent(x,y,settings);
		},
		update: function() {
			this.parent();
		},
		collideWith: function(other, axis) {
        	if(other.name == "bustershot" && other.power > 5) {
             	this.health -= 1;
				if(this.health == 0) {
                 	this.kill();
				} else
					this.currentAnim = this.anims[this.health];
			}
		}
	});
});
