ig.module('game.entities.Trophy')
.requires('impact.entity')
.defines(function() {
	EntityTrophy = ig.Entity.extend({
		size: {x: 16, y:16},
		gravityFactor:0,
		collides: ig.Entity.COLLIDES.NEVER,
		animSheet: new ig.AnimationSheet('media/trophy.png', 16, 16),
		init: function(x,y,settings) {
			this.addAnim('copper', 2, [0]);
			this.addAnim('silver', 2, [1]);
			this.addAnim('gold', 2, [2]);
			this.parent(x,y,settings);
		},
		update: function() {
			if(this.type == "silver") {
             	this.currentAnim = this.anims.silver;
			} else if (this.type == "gold") {
             	this.currentAnim = this.anims.gold;
			}
			this.parent();
		}
	});
});
