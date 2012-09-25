ig.module('game.entities.ShadowfistSpawnzone')
.requires('impact.entity', 'game.entities.shadowfistboss')
.defines(function() {
	EntityShadowfistSpawnzone = ig.Entity.extend({
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
			settings = {healthbar:"gray"};
			if(this.deathTarget){
				settings.deathTarget = this.deathTarget;
			}
			ig.game.spawnEntity(EntityShadowfistboss, this.pos.x, this.pos.y, settings);
			ig.game.allowInput = false;
			this.timer = new ig.Timer(6);
		},
		update: function() {
			if(this.timer != undefined && this.timer.delta() > 0) {
				ig.game.allowInput = true;
			}
			this.parent();
		}
	});
});