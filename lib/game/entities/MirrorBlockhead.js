ig.module('game.entities.MirrorBlockhead')
.requires('game.entities.enemy')
.defines(function() {
	EntityMirrorBlockhead = EntityEnemy.extend({
		flip:false,
		type: ig.Entity.TYPE.NONE,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.ACTIVE,
		vel: {x: 0, y:0},
		size: {x: 16, y:16},
		offset: {x: 1, y: 11},
		health: 20,
		xpVal: 5,
		travelVelocity: 15,
		gravityFactor: 1,
		sizes: [{x:16,y:16},{x:18,y:22},{x:18,y:27},{x:18,y:27},{x:18,y:27},{x:18,y:27},{x:18,y:27},{x:18,y:27}],
		offsets: [{x:1,y:11},{x:0,y:5},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],
		animSheet: new ig.AnimationSheet("media/Blockhead_Mirrorman.png", 18, 27),
		init: function(x,y,settings) {
			this.addAnim("idle", 1, [0], true);
			this.addAnim("flash", .05, [6,7,6,7]);
			this.addAnim("stand", .2, [0,1], true);
			this.addAnim("walkleft", .2, [2,3]);
			this.addAnim("walkright", .2, [4,5]);
			this.parent(x,y,settings);
		},
		update: function() {
			if(ig.game.player != undefined) {
				if(ig.game.player.pos.x < this.pos.x)
					this.flip=false;
				else
					this.flip=true;
				if(this.currentAnim == this.anims.idle && this.distanceTo(ig.game.player) < 50) {
					this.currentAnim = this.anims.stand.rewind();
					this.gravityFactor = 1;
				}
			}
			this.size = this.sizes[this.currentAnim.tile];
			this.offset = this.offsets[this.currentAnim.tile];

			if(this.currentAnim == this.anims.stand && this.currentAnim.loopCount > 0) {
				if(this.flip)
					this.currentAnim = this.anims.walkright.rewind();
				else
					this.currentAnim = this.anims.walkleft.rewind();
			}
			if(this.currentAnim == this.anims.walkleft || this.currentAnim ==  this.anims.walkright) {
				if(this.flip)
				{
					this.currentAnim = this.anims.walkright;
					this.vel.x = this.travelVelocity;
				} else {
					this.currentAnim = this.anims.walkleft;
					this.vel.x = -this.travelVelocity;
				}
			}
	
			this.parent();
			if(this.currentAnim == this.anims.idle) {
				this.vel.x = 0;
			}
		}
	});
});
