ig.module('game.entities.MirrormanSpawnzone')
.requires('impact.entity', 'game.entities.mirrormanboss')
.defines(function() {
	EntityMirrormanSpawnzone = ig.Entity.extend({
		size: {x: 16, y: 16},
		gravityFactor: 0,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(196, 0, 0, 0.2)',
		zIndex: -100,
		timer: undefined,
		triggerActivated: function() {
			settings = {healthbar:"blue", isRealBoss: true};
			if(this.deathTarget){
				settings.deathTarget = this.deathTarget;
			}
			_gaq.push(["_trackEvent", "Bosses", "Fought", "Mirror Man", undefined, true]);
			ig.game.spawnEntity(EntityMirrormanboss, this.pos.x, this.pos.y, settings);
			ig.game.allowInput = false;
			this.timer = new ig.Timer(9);
		},
		update: function() {
			if(this.timer != undefined && this.timer.delta() > 0) {
				ig.game.allowInput = true;
			}
			this.parent();
		}
	});
});
