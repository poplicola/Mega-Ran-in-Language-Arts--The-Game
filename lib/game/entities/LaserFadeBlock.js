ig.module('game.entities.LaserFadeBlock')
.requires('impact.entity')
.defines(function() {
	EntityLaserFadeBlock = ig.Entity.extend({
		/* States are 0 - off, 1 - on */
		startState: 0,
		state: 0,
		style: 0,
		debug: 0,
		gravityFactor:0,
		animSheet: new ig.AnimationSheet('media/LaserFadeBlock.png', 16, 16),
		timer: undefined,
		init: function(x, y, settings) {
			this.onTime= 2;
			this.offTime= 2;
			this.parent(x,y,settings);
			this.addAnim("fadeOut", 0.1, [this.style, this.style+3, this.style+6, 10], true);
			this.addAnim("fadeIn", 0.1, [10, this.style+6, this.style+3, this.style], true);
			this.addAnim("in", 1, [this.style], true)
			this.addAnim("out", 1, [10], true)
			this.state = this.startState;
			this.timer = new ig.Timer();
		},
		update: function() {         
			
			if(this.state == 0) {
				if(this.timer.delta() > this.offTime)
				{
					this.currentAnim = this.anims.fadeIn.rewind();
					this.state = 2;
					this.timer.reset();
					if(this.debug)
						ig.mark("FadeIn");
				}
			} else if(this.state == 1){
				if(this.timer.delta() > this.onTime)
				{
					this.currentAnim = this.anims.fadeOut.rewind();
					this.state = 2;
					this.timer.reset();
					if(this.debug)
						ig.mark("FadeOut");
				}
			} else {
				if(this.currentAnim.loopCount > 0)
				{
					if(this.currentAnim == this.anims.fadeIn){
						this.currentAnim = this.anims.in;
						this.collides = ig.Entity.COLLIDES.FIXED;
						this.state = 1;
						if(this.debug)
							ig.mark("In");
					} else {
						this.currentAnim = this.anims.out;
						this.collides = ig.Entity.COLLIDES.NEVER;
						this.state = 0;
						if(this.debug)
							ig.mark("Out");
					}
					this.timer.reset();
				}
			}
			this.parent();
		}
	});
});