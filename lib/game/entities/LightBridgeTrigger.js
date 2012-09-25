ig.module('game.entities.LightBridgeTrigger')
.requires('impact.entity')
.defines(function() {
	EntityLightBridgeTrigger= ig.Entity.extend({
		flip:false,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.FIXED,
		gravityFactor:0,
		size:{x:16,y:16},
		animSheet: new ig.AnimationSheet('media/LightBridgeTrigger.png', 32,16),
		init: function(x,y,settings) {
			this.addAnim('off', 1, [0]);
			this.addAnim('on', 1, [1]);
			this.parent(x,y,settings);
			if(this.flip) {
            	this.anims.on.flip.x = true;
				this.anims.off.flip.x = true;
			} else {
             	this.offset.x = 16;
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
		collideWith: function(other, axis) {
			if(other.name == "bustershot") {
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
			this.parent(other,axis);
		},
	});
});
