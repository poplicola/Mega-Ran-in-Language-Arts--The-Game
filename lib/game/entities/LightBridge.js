ig.module('game.entities.LightBridge')
.requires('impact.entity')
.defines(function() {
		EntityLightBridge = ig.Entity.extend({
		active:false,
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		options: [],
		selectedItem: 0,
		size: {x: 48, y:16},
		gravityFactor:0,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(128, 128, 140, 0.7)',
		displaySheet: new ig.Image('media/LightBridge.png'),
		init: function(x, y, settings) {
			this.parent(x,y,settings);
		},
		update: function() {
			if(this.active) {
				if (ig.game.getEntityByName('megaran') != undefined){
					if (ig.game.getEntityByName('megaran').pos.y + ig.game.getEntityByName('megaran').size.y > this.pos.y)
						this.collides = ig.Entity.COLLIDES.NEVER;
					else
						this.collides = ig.Entity.COLLIDES.FIXED;
					}
			} else {
             	this.collides = ig.Entity.COLLIDES.NEVER;
			}
			this.parent();
		},
		draw: function() {
			i=0;
			width = this.size.x/16;
			this.displaySheet.drawTile(this.pos.x-ig.game.screen.x, this.pos.y-ig.game.screen.y, 2+(this.active?1:0), 16);
			if(this.active) {
				if(width > 2) {
					this.displaySheet.drawTile(this.pos.x-ig.game.screen.x + 16, this.pos.y-ig.game.screen.y, 0, 16);
					for(i=2;i<width-1;i++)
						this.displaySheet.drawTile(this.pos.x-ig.game.screen.x + i*16, this.pos.y-ig.game.screen.y, 1, 16);
				}
			}
			this.displaySheet.drawTile(this.pos.x-ig.game.screen.x+(width-1)*16, this.pos.y-ig.game.screen.y, 4+(this.active?1:0), 16);
			this.parent();
		},
		triggerActivated: function(other) {
        	this.active = !this.active;
		},
// 		check: function(other) {
// 		if (ig.game.getEntityByName('megaran') != undefined)
// 		{
// 			// if (other instanceof EntityMegaran)
// 			{
// 				if (ig.game.getEntityByName('megaran').pos.y + ig.game.getEntityByName('megaran').size.y > this.pos.y + -10 &&
// 					ig.game.getEntityByName('megaran').pos.y + ig.game.getEntityByName('megaran').size.y < this.pos.y)
// 						ig.game.getEntityByName('megaran').pos.y = this.pos.y;
// 			}
// 		}
// 		this.parent(other);
// 		},
	});
});
