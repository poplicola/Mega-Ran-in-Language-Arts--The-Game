ig.module('game.entities.BeamLaser')
.requires('impact.entity')
.defines(function() {
		EntityBeamLaser= ig.Entity.extend({
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 48, y:8},
		gravityFactor:0,
		laserState: 0,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(255, 0, 0, 0.2)',
		displaySheet: new ig.Image('media/BeamLaser.png'),
		init: function(x, y, settings) {
			this.delay = 1;
			this.turningOn = 0;
			this.parent(x,y,settings);
			this.timer = new ig.Timer(this.delay);
		},
		update: function() {
			if(this.turningOn && this.timer.delta() > 0)
				this.laserState++;
			this.parent();
		},
		resetfunc: function() {
			this.turningOn = false;
			this.laserState = 0;
		},
		draw: function() {
			if(this.laserState>0) {
				tile = 0;
				if(this.laserState > 30)
					tile = 2;
				else if (this.laserState > 10)
					tile = 1;
					
				i=0;
				width = this.size.x/8;
				for(i=0;i<width;i++)
					this.displaySheet.drawTile(this.pos.x-ig.game.screen.x + i*8, this.pos.y-ig.game.screen.y, tile, 8);
			}
			this.parent();
		},
		check: function(other) {
        	if(ig.game.player != undefined && other == ig.game.player && this.laserState > 30) {
             	ig.game.player.kill();
			}
		},
		triggerActivated: function() {
			if(this.laserState == 0) {
				this.timer.reset();
				this.turningOn = true;
			} 
		}
	});
});
