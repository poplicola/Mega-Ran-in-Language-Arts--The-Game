ig.module(
	'game.entities.TrashTosser'
)
.requires(
	'game.entities.enemy',
	'game.entities.Trash'
)
.defines(function() {
	EntityTrashTosser = EntityEnemy.extend({
		size: {x: 32, y:32},
		sizes: [{x:32,y:32},{x:34,y:36},{x:40,y:40},{x:40,y:40},{x:40,y:40},{x:32,y:32},{x:34,y:36},{x:40,y:40},{x:40,y:40},{x:40,y:40}],
		offset: {x: 24, y:44},
		offsets: [{x:24, y:44},{x:26, y:29},{x:25, y:13},{x:23, y:9},{x:23, y:17},{x:24, y:44},{x:26, y:29},{x:25, y:13},{x:23, y:9},{x:23, y:17}],
		vel: {x:0, y:0},
		gravityFactor:0,
		duration:5,
		collides: ig.Entity.COLLIDES.FIXED,
		animSheet: new ig.AnimationSheet('media/TrashTosser.png', 80, 77),
		lastFrame: 0,
		timer: undefined,
		interval: 2,
		health: 100,
		xpVal: 20,
		init: function(x, y, settings) {
			this.parent(x,y,settings);
			this.addAnim("hiding", 1, [0], true);
			this.addAnim("hiding_flash", .1, [5], true)
			this.addAnim("stand", .2, [1,2], true);
			this.addAnim("stand_flash", .1, [7], true)
			this.addAnim("throw", .2, [3,4], true);
			this.addAnim("throw_flash", .1, [9], true)
			this.anims.hiding.flip.x = this.flip;
			this.anims.stand.flip.x = this.flip;
			this.anims.throw.flip.x = this.flip;
			this.anims.hiding_flash.flip.x = this.flip;
			this.anims.stand_flash.flip.x = this.flip;
			this.anims.throw_flash.flip.x = this.flip;
			this.lastFrame = this.currentAnim.frame;
			this.timer = new ig.Timer();
		},
		update: function() {
			if(this.currentAnim == this.anims.hiding_flash && this.currentAnim.loopCount > 0)
				this.currentAnim = this.anims.hiding.rewind();
			else if (this.currentAnim == this.anims.stand_flash && this.currentAnim.loopCount > 0)
				this.currentAnim = this.anims.stand;
			else if (this.currentAnim == this.anims.throw_flash && this.currentAnim.loopCount > 0) {
				this.currentAnim = this.anims.stand;
				this.timer.reset();
			}
			if(this.currentAnim == this.anims.stand && this.timer.delta() > this.interval) {
				this.currentAnim = this.anims.throw.rewind();
			}
			if(this.currentAnim == this.anims.throw) {
				if(this.currentAnim.loopCount > 0) {
					this.currentAnim = this.anims.stand;
					this.timer.reset();
				}
				if((this.currentAnim.tile == 4 || this.currentAnim.tile==9) && this.lastFrame == 3) {
					ig.game.spawnEntity(EntityTrash, this.pos.x+this.size.x, this.pos.y+10, {vel:{x:400, y:300}});
				}
			}
			this.size=this.sizes[this.currentAnim.tile];
			this.pos.x = this.pos.x-(this.offset.x-this.offsets[this.currentAnim.tile].x);
			this.pos.y = this.pos.y-(this.offset.y-this.offsets[this.currentAnim.tile].y);
			this.offset = this.offsets[this.currentAnim.tile];
			this.lastFrame = this.currentAnim.tile;
			this.parent();
		},	
		collideWith: function(other, axis) {
			if(other.name == "bustershot") {
				if(this.currentAnim == this.anims.hiding)
					this.currentAnim = this.anims.hiding_flash.rewind();
				else if (this.currentAnim == this.anims.stand)
					this.currentAnim = this.anims.stand_flash.rewind();
				else if (this.currentAnim == this.anims.throw) {
					this.currentAnim = this.anims.throw_flash.rewind();
					ig.game.spawnEntity(EntityTrash, this.pos.x+this.size.x, this.pos.y+10, {vel:{x:400, y:300}});
				}
			}
			this.parent(other, axis);
		},
		triggerActivated: function(){
			this.currentAnim = this.anims.stand.rewind();
			this.timer.reset();
		}
	});
});