ig.module('game.entities.MirrorSpikes')
.requires('impact.entity')
.defines(function() {
		EntityMirrorSpikes= ig.Entity.extend({
		collides: ig.Entity.COLLIDES.FIXED,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 48, y:16},
		gravityFactor:0,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(255, 0, 0, 0.2)',
		displaySheet: new ig.Image('media/MirrorSpikes.png'),
		init: function(x, y, settings) {
			this.parent(x,y,settings);
		},
		update: function() {
			this.parent();
		},
		draw: function() {
			i=0;
			width = this.size.x/16;
			for(i=0;i<width;i++)
				this.displaySheet.drawTile(this.pos.x-ig.game.screen.x + i*16, this.pos.y-ig.game.screen.y, 0, 16);
			this.parent();
		},
		check: function(other) {
        	if(ig.game.player != undefined && other == ig.game.player) {
             	ig.game.player.kill();
			}
		}
	});
});
