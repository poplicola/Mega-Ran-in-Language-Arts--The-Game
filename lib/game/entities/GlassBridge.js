ig.module('game.entities.GlassBridge')
.requires('impact.entity')
.defines(function() {
		EntityGlassBridge = ig.Entity.extend({
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 48, y:16},
		health: [],
		numBlocks: 0,
		gravityFactor:0,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(128, 128, 140, 0.7)',
		hitTimer: new ig.Timer(1),
		displaySheet: new ig.Image('media/GlassBridge.png'),
		init: function(x, y, settings) {
			this.parent(x,y,settings);
			if(this.size.x < 48)
				this.size.x = 48;
            this.numBlocks = this.size.x/16 - 2;
			this.blockStart = this.pos.x + 16;
			for(i=0;i<this.numBlocks;i++) {
            	this.health[i] = 3;
			}
		},
		update: function() {
			/* Check if the player is above a cell of this bridge */
			this.collides = ig.Entity.COLLIDES.FIXED;
			
			if(ig.game.player) {
				if(ig.game.player.pos.y+ig.game.player.size.y > this.pos.y+2)
				{ 
					this.collides = ig.Entity.COLLIDES.NEVER;
				} else {
					tile = Math.floor((ig.game.player.pos.x - (this.blockStart))/16);
					if(tile >= 0 && tile < this.numBlocks) {
						/* Okay, they're over the bridge */
						if(this.health[tile] < 1)
							this.collides = ig.Entity.COLLIDES.NEVER;
					}
				}
				
			}
			this.parent();
		},
		draw: function() {
			i=0;
			this.displaySheet.drawTile(this.pos.x-ig.game.screen.x, this.pos.y-ig.game.screen.y, 0, 16);
			if(this.health[0] > 0) {
				this.displaySheet.drawTile(this.pos.x-ig.game.screen.x + 16, this.pos.y-ig.game.screen.y, 2*this.health[0], 16);
			}
			for(i=0;i<this.numBlocks;i++) {
				if(this.health[i] > 0) 
					this.displaySheet.drawTile(this.pos.x-ig.game.screen.x + (i+2)*16, this.pos.y-ig.game.screen.y, 2*this.health[i]+1, 16);
			}
			this.displaySheet.drawTile(this.pos.x-ig.game.screen.x+(this.numBlocks+1)*16, this.pos.y-ig.game.screen.y, 1, 16);
			this.parent();
		},
		collideWith: function(other, axis) {
        	if(axis == 'y' && other == ig.game.player) {
				tile = Math.floor((ig.game.player.pos.x - (this.blockStart))/16);
				if(this.hitTimer.tick() > .25 || tile != this.lastTile) {
					this.health[tile]=this.health[tile]-1;
				}
				this.lastTile = tile;
			}
		}
	});
});
