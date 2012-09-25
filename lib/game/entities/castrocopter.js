ig.module('game.entities.castrocopter')
.requires('game.entities.flyer')
.defines(function() {
	EntityCastrocopter = EntityFlyer.extend({
		name: "castrocopter",
		health: 20,
		vel: {x: 50, y:0},
		size: {x: 21, y:18},
		offset: {x: 5, y: 9},
		xpVal: 4,
		animSheet: new ig.AnimationSheet('media/CastroCopter.png', 36,36),
		init: function(x,y,settings) {
         	this.addAnim('idle', 0.02, [0,1,2,3,2,1]);
			this.addAnim('flash', 0.02, [4,5,6]);
			this.parent(x,y,settings);	
		},
		update: function() {
			this.parent();
			this.currentAnim.flip.x = (this.vel.x > 0);
		}
	});
});