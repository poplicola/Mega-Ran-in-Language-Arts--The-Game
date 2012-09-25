ig.module('game.entities.PuzzleLightBridgeTrigger')
.requires('impact.entity')
.defines(function() {
	EntityPuzzleLightBridgeTrigger= ig.Entity.extend({
		flip:false,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		gravityFactor:0,
		size:{x:19,y:16},
		animSheet: new ig.AnimationSheet('media/PuzzleLightBridgeTrigger.png', 32,16),
		init: function(x,y,settings) {
			this.addAnim('off', 1, [0]);
			this.addAnim('on', 1, [1]);
			this.parent(x,y,settings);
			if(this.flip) {
            	this.anims.on.flip.x = true;
				this.anims.off.flip.x = true;
			} else {
             	this.offset.x = 13;
			}
			this.parent(x,y,settings);
		},
		update: function() {
			if(this.active)
				this.currentAnim = this.anims.on;
			else
				this.currentAnim = this.anims.off;
			this.parent();
		},
		check: function(other){
			if(other.name == "bustershot") {
				other.kill();
				if(this.target) {
                 	for(t in this.target) {
						activator = ig.game.getEntityByName(this.target[t]);
						if(activator && activator.triggerActivated) 
						{
							this.active=!this.active;
							activator.triggerActivated(this);
						}
					}
				}
			}
		},
		collideWith: function(other, axis) {
			
			this.parent(other,axis);
		},
	});
});
