ig.module('game.entities.Teleporter')
.requires(
	'impact.entity'
)
.defines(function() {
		EntityTeleporter = ig.Entity.extend({
			
		warpSFX: new ig.Sound('media/audio/teleporterActivated.*'),
			
		active:false,
		maxVel: {x:0, y:100},	
		accel: {x:0, y:0},
		friction: {x:0, y:0},
		collides: ig.Entity.COLLIDES.FIXED,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 45, y:18},
		offset: {x: 0, y: 46},
		gravityFactor:0,
		zIndex:200,
		delay:1000,
		animSheet: new ig.AnimationSheet('media/Teleporter.png', 45, 64),
		init: function(x, y, settings) {
			this.delay = 1;
			this.addAnim( 'idle', .3, [1,2,3,1,3,2,2,5,3,1,3,2,4,1,2,2,5,4,2,3,1,3,4,3,5,2,1,3,4,4,3,1,3,1,3,2,2,4,5,4,3,2,1,1,3,1,4,3,1,3,5]);
			this.addAnim( 'dead', 1, [0]);
			if(typeof settings.destination === 'undefined')
				this.currentAnim = this.anims.dead;
			else
				this.currentAnim=this.anims.idle;
			this.currentAnim.gotoRandomFrame();
			this.parent(x,y,settings);
		},
		update: function() {
			if(this.currentAnim.loopCount > 0)
				this.currentAnim.gotoRandomFrame();
			if(this.active) {
             	this.currentAnim = this.anims.idle;
			}	
			else
			{
				this.currentAnim = this.anims.dead;
			}
			this.parent();
		},
		collideWith: function(other, axis) {
        	if(other == ig.game.player && axis == 'y') {
				if(this.active) {
					ig.game.actionText = this.actionText;
					ig.game.actionTextPos = {x: this.pos.x+this.size.x/2, y: this.pos.y};
					if(ig.input.pressed('up')) {
						this.warpSFX.play();
						//Where are you going? Then play the corresponding music.
						_gaq.push(["_trackEvent", "Levels", "Warp To Level", this.destination, undefined, true]);
						if (this.destination=='SmokeMan') {
							ig.music.fadeOut(this.delay);
							ig.game.fader = new ig.ScreenFader({fade: 'in', callback: ig.game._doneLoading, context: { direction: 'in', music: 'smokeman', level: ig.game.levels[this.destination]}});
						} else if(this.destination=='MegaBase') {
							ig.music.fadeOut(this.delay);
							ig.game.fader = new ig.ScreenFader({fade: 'in', callback: ig.game._doneLoading, context: { direction: 'in', music: 'megaBase', level: ig.game.levels[this.destination]}});
						} else if(this.destination=='MirrorMan') {
							ig.music.fadeOut(this.delay);
							ig.game.fader = new ig.ScreenFader({fade: 'in', callback: ig.game._doneLoading, context: { direction: 'in', music: 'mirrorZone', level: ig.game.levels[this.destination]}});
						} else if(this.destination=='LaserMan') {
							ig.music.fadeOut(this.delay);
							ig.game.fader = new ig.ScreenFader({fade: 'in', callback: ig.game._doneLoading, context: { direction: 'in', music: 'laserZone', level: ig.game.levels[this.destination]}});
						} else if(this.destination == 'Sandbox') {
							ig.music.fadeOut(this.delay);
							ig.game.fader = new ig.ScreenFader({fade: 'in', callback: ig.game._doneLoading, context: { direction: 'in', music: 'laserZone', level: ig.game.levels[this.destination]}});
						}	else if(this.destination == 'ShadowArena') {
								ig.music.fadeOut(this.delay);
								ig.game.fader = new ig.ScreenFader({fade: 'in', callback: ig.game._doneLoading, context: { direction: 'in', music: 'shadowArena', level: ig.game.levels[this.destination]}});
							}
					} 
				}
			}
			return this.parent(other, axis);
		},
		triggerActivated: function() {
        	this.active=!this.active;
			for(t in this.target) {
				activator = ig.game.getEntityByName(this.target[t]);
				if(activator && activator.triggerActivated) 
				{
					activator.triggerActivated(this);
				}
			}
		},
		draw: function() {
			this.parent();
		}
	});
});
