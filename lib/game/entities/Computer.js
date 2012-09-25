ig.module('game.entities.Computer')
.requires('impact.entity')
.defines(function() {
		EntityComputer = ig.Entity.extend({
			
		selectSFX: new ig.Sound('media/audio/menuSelect.*'),
			
		activated:false,
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 48, y:48},
		displaySheet: new ig.Image('media/textbox.png'),
		animSheet: new ig.AnimationSheet('media/Computer.png', 48, 48),
		init: function(x, y, settings) {
			this.addAnim( 'idle', .05, [1,2,3,1,3,2,2,0,3,1,3,2,1,1,2,2,0,1,2,3,1,3,1,3,0,2,1,3,1,1,3,1,3,1,3,2,2,1,0,1,3,2,1,1,3,1,1,3,1,3,0]);
			this.currentAnim=this.anims.idle;
			this.currentAnim.gotoRandomFrame();
			this.parent(x,y,settings);
		},
		update: function() {
			if(this.currentAnim.loopCount > 0)
				this.currentAnim.gotoRandomFrame();
			this.parent();
			if(this.target != undefined) {
				_interface = ig.game.getEntityByName(this.target[0]);
			}
			if(ig.game.player && this.touches(ig.game.player)) {
				ig.game.actionTextPos = {x: this.pos.x+this.size.x/2, y: this.pos.y};
				ig.game.actionText = this.actionText;
				if(_interface) {
					_interface.activated = true;
					if(ig.input.pressed('up')) {
						_interface.up();
					} else if (ig.input.pressed('down')) {
						_interface.down();
					} else if (ig.input.pressed('fire')) {
						_interface.select();
						this.selectSFX.play();
					}
				}
			} else {
            	if(_interface)
					_interface.activated=false;
			}
		},
		draw: function() {
        	this.parent();	
		},
		check: function(other) {
			return this.parent(other);
		}
	});
});
