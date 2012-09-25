ig.module('game.entities.orbitallaser')
.requires('impact.entity', 'game.entities.lasermanbossbeamgenerator')
.defines(function() {
	EntityOrbitallaser = ig.Entity.extend({
		size: {x: 16, y: 16},
		target: {},
		name: 'orbitallaser',
		gravityFactor: 0,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.B,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(0, 255, 255, 0.7)',
		zIndex: -100,
		init: function(x,y,settings) {
			this.parent(x,y,settings);
		},
		firMahLas0r: function() {
			if (ig.game.getEntityByName('megaran') == !undefined)
				ig.game.spawnEntity(EntityLasermanbossbeamgenerator, ig.game.getEntityByName('megaran').pos.x, this.pos.y, {velocityX: 0, velocityY: 255, bottomY: this.pos.y, upward: false});
			else
				ig.game.spawnEntity(EntityLasermanbossbeamgenerator, this.pos.x + Math.floor(Math.random() * this.size.x), this.pos.y, {velocityX: 0, velocityY: 255, bottomY: this.pos.y, upward: false});
		}
	});
});
