ig.module('game.entities.ConstructionZone')
.requires('impact.entity')
.defines(function() {
	EntityConstructionZone = ig.Entity.extend({
		size: {x: 32, y: 32},
		gravityFactor: 0,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.FIXED,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(255, 255, 0, 0.1)',
		zIndex: 1000,
		displaySheet: new ig.Image("media/constructionzone.png"),
		init: function(x,y,settings) {
			this.requires = [];
			this.parent(x,y,settings);
			this.x_tiles = Math.floor(this.size.x/16);
			this.y_tiles = Math.floor(this.size.y/16);
			this.destroyCount = 95;
			this.doing_construction = false;
		},
		draw: function() {
			if(this.destroyCount%25==0)
				return;
			for(y=0;y<this.y_tiles;y++)
			{
				for(x=0;x<this.x_tiles;x++){
					tile=0;
					if(y==0){
						/* Top row */
						if(x==0){
							/* Left col */
							tile = 0;
						} else if(x==this.x_tiles-1) {
							/* Right col */
							tile = 2;
						} else {
							/* Middle col */
							tile = 1;
						}
						
					} else if (y==this.y_tiles-1){
						/* Bottom row */
						if(x==0){
							/* Left col */
							tile = 6;
						} else if(x==this.x_tiles-1) {
							/* Right col */
							tile = 8;
						} else {
							/* Middle col */
							tile = 7;
						}
					} else {
						/* Middle row */
						if(x==0){
							/* Left col */
							tile = 3;
						} else if(x==this.x_tiles-1) {
							/* Right col */
							tile = 5;
						} else {
							/* Middle col */
							tile = 4;
						}
					}
					this.displaySheet.drawTile(this.pos.x-ig.game.screen.x +x*16,this.pos.y-ig.game.screen.y+y*16,tile, 16);
				}
			}
			this.parent();
		},
		update: function(){
			if(ig.game.gameState.constructions[this.name] != undefined){
				this.kill();
			}
			if(this.doing_construction){
				this.destroyCount=this.destroyCount-5;
				if(this.destroyCount <= 0) {
					ig.game.gameState.constructions[this.name] = true;
					this.kill();
				}
			}
			this.parent();
		},
		check: function(other) {
			this.parent();
		},
		construct: function() {
			this.doing_construction = true;

		}
	});
});
