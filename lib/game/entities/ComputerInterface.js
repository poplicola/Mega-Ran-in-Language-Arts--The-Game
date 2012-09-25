ig.module('game.entities.ComputerInterface')
.requires('impact.entity')
.defines(function() {
		EntityComputerInterface = ig.Entity.extend({
		activated:false,
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		options: [],
		selectedItem: 0,
		size: {x: 48, y:48},
		gravityFactor:0,
		blinkCounter: 0,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(128, 128, 140, 0.7)',
		displaySheet: new ig.Image('media/textbox.png'),
		init: function(x, y, settings) {
			this.parent(x,y,settings);
			if(this.screenTitle == undefined) {
            	this.screenTitle = "MegaBase Computer System";
			}
		},
		update: function() {
			this.blinkCounter = ((this.blinkCounter+1)%40);
			this.parent();
		},
		up: function() {
        	this.selectedItem = (this.selectedItem + this.options.length-1)%this.options.length;
		},
		down: function() {
        	this.selectedItem = (this.selectedItem + 1)%this.options.length;
		},
		select: function() {
        	if(this.target && this.target[this.selectedItem])
			{
				_target = ig.game.getEntityByName(this.target[this.selectedItem]);
				if(_target && _target.triggerActivated) {
                 	_target.triggerActivated();
				}
			}
		},
		draw: function() {
        	this.parent();	
			if(this.activated) {

				tile = 0;
				width = this.size.x/16;
				height = this.size.y/16;
				for(i=0;i<width;i++) {
                	for(j=0;j<height;j++) {
                    	if(i==0) {
                         	if(j==0) {
                            	/* Top left */
								tile = 0;	
							} else if (j==height-1) {
								/* Bottom left */
                             	tile = 8;
							} else {
                                tile = 4;
							}
						} else if (i==width-1) {
                         	if(j==0) {
                            	/* Top right*/
								tile = 2;	
							} else if (j==height-1) {
								/* Bottom right */
                             	tile = 10;
							} else {
                                tile = 6;
							}
						}  else {
                         	if(j==0) {
                            	/* Top */
								tile = 1;	
							} else if (j==height-1) {
								/* Bottom */
                             	tile = 9;
							} else {
                                tile = 5;
							}

						}	
						this.displaySheet.drawTile(this.pos.x-ig.game.screen.x + i*16, this.pos.y-ig.game.screen.y+j*16, tile, 16);
					}
				}
				/* Draw title and options */
				ig.game.font.draw(this.screenTitle, this.pos.x-ig.game.screen.x + this.size.x/2, this.pos.y-ig.game.screen.y + 10, ig.Font.ALIGN.CENTER);
				for(i=0;i<this.options.length;i++) {
					if(i==this.selectedItem && this.blinkCounter > 20) {
						ig.game.font.draw("->", this.pos.x-ig.game.screen.x+10, this.pos.y-ig.game.screen.y + 25 + 20*i, ig.Font.ALIGN.LEFT);
					}
					ig.game.font.draw(this.options[i], this.pos.x-ig.game.screen.x+20, this.pos.y-ig.game.screen.y + 25 + 20*i, ig.Font.ALIGN.LEFT);
					if(this.target && this.target[i])
					{
						_target = ig.game.getEntityByName(this.target[i]);
						if(_target && _target.active) {
							ig.game.greenfont.draw("enabled", this.pos.x-ig.game.screen.x+40, this.pos.y-ig.game.screen.y + 35 + 20*i, ig.Font.ALIGN.LEFT);
						} else {
							ig.game.redfont.draw("disabled", this.pos.x-ig.game.screen.x+40, this.pos.y-ig.game.screen.y + 35 + 20*i, ig.Font.ALIGN.LEFT);
						}
					}
				}
			}
		}
	});
});
