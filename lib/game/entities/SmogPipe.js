ig.module('game.entities.SmogPipe')
.requires('impact.entity', 'game.entities.SmogCloud')
.defines(function() {
	EntitySmogPipe = ig.Entity.extend({
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.FIXED,
		vel: {x: 0, y:0},
		size: {x: 15, y:16},
		offset: {x: 0, y: 0},
		spawnPoint: {x:0, y:0 },
		gravityFactor:0,
		_wmScalable: true,
		timer: undefined,
		interval: 3,
		displaySheet: new ig.Image("media/Smokestack.png"),
		init: function(x,y,settings) {
			this.timer = new ig.Timer();
			this.parent(x,y,settings);
			this.spawnPoint = {x: this.pos.x+this.size.x/2-7, y: this.pos.y-14};
		},
		update: function() {
			if(this.timer.delta() > this.interval) {
				ig.game.spawnEntity(EntitySmogCloud, this.spawnPoint.x, this.spawnPoint.y).zIndex = this.zIndex+1;
				this.timer.reset();
			}

			this.parent();
		},
		draw: function() {
			var tile=0;
			var y=this.pos.y-ig.game.screen.y;
			this.displaySheet.drawTile(this.pos.x-ig.game.screen.x, y, 0, 15, 16);
			for(y=y+16;y<this.pos.y-ig.game.screen.y+this.size.y-16;y+=16)
				this.displaySheet.drawTile(this.pos.x-ig.game.screen.x, y, 1, 15, 16);
			this.displaySheet.drawTile(this.pos.x-ig.game.screen.x, y, 3, 15, 16);
			this.parent();
		}
	});
});