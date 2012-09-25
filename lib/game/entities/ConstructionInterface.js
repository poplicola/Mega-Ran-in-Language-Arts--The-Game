ig.module('game.entities.ConstructionInterface')
.requires('impact.entity')
.defines(function() {
		EntityConstructionInterface = ig.Entity.extend({
		activated:false,
		selectSFX: new ig.Sound('media/audio/menuSelect.*'),
		collides: ig.Entity.COLLIDES.NEVER,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		selectedItem: 0,
		size: {x: 48, y:48},
		zIndex:1001,
		gravityFactor:0,
		buildOpacity:0,
		readyToBuild:0,
		_wmScalable: true,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(128, 128, 140, 0.7)',
		displaySheet: new ig.Image('media/textbox.png'),
		blueprint: new ig.Image('media/Blueprint.png'),
		crate: new ig.Image('media/Crate.png'),
		init: function(x, y, settings) {
			this.parent(x,y,settings);
			if(this.screenTitle == undefined) {
            	this.screenTitle = "MegaBase\n Construction System";
			}
		},
		update: function() {
			this.parent();
		},
		select: function() {
			if(this.readyToBuild){
				this.selectSFX.play();
				/* nuke the interface */
				this.kill();
				this.zone.construct();
				_gaq.push(["_trackEvent", "Items", "Construction Complete", this.zone.project, undefined, true]);
				for(i=0;i<this.zone.requires.length;i++){
					_gaq.push(["_trackEvent", "Items", "Use", this.zone.requires[i], undefined, true]);				
				}
			}
		},
		draw: function() {
        	this.parent();	
			if(this.activated) {
				tile = 0;
				width = Math.floor(this.size.x/16);
				height = Math.floor(this.size.y/16);
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
				ig.game.font.draw("Project: " + this.zone.project, this.pos.x-ig.game.screen.x + 10, this.pos.y-ig.game.screen.y + 35, ig.Font.ALIGN.LEFT);
				
				ig.game.font.draw("Requirements", this.pos.x-ig.game.screen.x + 10, this.pos.y-ig.game.screen.y + 50, ig.Font.ALIGN.LEFT);
				
				numRequired = this.zone.requires.length;
				for(i=0;i<this.zone.requires.length;i++){
					font = ig.game.redfont;
					if(ig.game.gameState.collectables[this.zone.requires[i]] != undefined) {
						font = ig.game.greenfont;
						numRequired--;
					}
					splitter = this.zone.requires[i].indexOf(':');
					type = this.zone.requires[i].substr(0,splitter);
					name = this.zone.requires[i].substr(splitter+1, this.zone.requires[i].length-1);
					if(type == "blueprint") {
						this.blueprint.draw(this.pos.x-ig.game.screen.x + 8, this.pos.y-ig.game.screen.y + 60 + 21*i);
					} else if (type == "material") {
						this.crate.draw(this.pos.x-ig.game.screen.x + 8, this.pos.y-ig.game.screen.y + 60 + 21*i);
					}
					font.draw(name, this.pos.x-ig.game.screen.x + 30, this.pos.y-ig.game.screen.y + 70 + 21*i, ig.Font.ALIGN.LEFT);
				}
				
				if(numRequired == 0){
					this.readyToBuild=true;
					this.buildOpacity=((this.buildOpacity+1)%40);
					if(this.buildOpacity > 20)
						ig.game.font.draw("->", this.pos.x+this.size.x/2-ig.game.screen.x-(ig.game.font.widthForString("Construct!")/2 + 5), this.pos.y+this.size.y-ig.game.screen.y - 20, ig.Font.ALIGN.CENTER);
					ig.game.font.draw("Construct!", this.pos.x+this.size.x/2-ig.game.screen.x, this.pos.y+this.size.y-ig.game.screen.y - 20, ig.Font.ALIGN.CENTER);
				} else {
					ig.game.font.draw(numRequired + " item(s) missing", this.pos.x+this.size.x/2-ig.game.screen.x, this.pos.y+this.size.y-ig.game.screen.y -20, ig.Font.ALIGN.CENTER);
				}
/*				for(i=0;i<this.options.length;i++) {
					if(i==this.selectedItem) {
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
				}*/
			}
		}
	});
});
