ig.module('game.entities.object')
.requires('impact.entity')
.defines(function() {
	EntityObject = ig.Entity.extend({
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.ACTIVE,
		vel: {x: 0, y:0},
		offset: {x: 0, y: 0},
		friction: {x: 50, y:0},
		maxVel: {x:10000, y:10000},
		collideWith: function(other, axis) {
			if(other.name == "bustershot") {
				if(this.anims.flash != undefined)
				{	
					this.currentAnim = this.anims.flash.rewind();
					this.currentAnim.flip.x = this.flip;
				}
				this.receiveDamage(5 * this.damageFactor.busterShot, other);
			} 
			this.parent(other, axis);
		},
		kill: function() {
			this.parent();
		}
	});
});
