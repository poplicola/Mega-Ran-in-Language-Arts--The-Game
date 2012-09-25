ig.module('game.entities.Elevator')
.requires('impact.entity')
.defines(function() {
		EntityElevator = ig.Entity.extend({
		
		elevatorA_SFX: new ig.Sound('media/audio/elevatorA.*'),
		elevatorB_SFX: new ig.Sound('media/audio/elevatorB.*'),
			
		maxVel: {x:0, y:100},	
		accel: {x:0, y:0},
		friction: {x:0, y:300},
		collides: ig.Entity.COLLIDES.FIXED,
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		size: {x: 64, y:8},
		offset: {x: 0, y: 15},
		powered: 0,
		occupied: 0,
		gravityFactor:0,
		zIndex: 200,
		lastDir: 0,
		animSheet: new ig.AnimationSheet('media/Elevator.png', 64, 22),
		init: function(x, y, settings) {
			this.addAnim( 'idle', .15, [0]);
			this.currentAnim=this.anims.idle;
			this.parent(x,y,settings);
		},
		update: function() {         
			this.parent();
			this.occupied = 0;
			this.powered=0;
			if(ig.game.player && !this.touches(ig.game.player) && this.preferredY) {
            	if(this.pos.y < this.preferredY) {
					this.pos.y +=1;
				} else if (this.pos.y > this.preferredY) {
                 	this.pos.y = this.preferredY;
				}
			}
		},
		collideWith: function(other, axis) {
        	if(other == ig.game.player && axis == 'y') {
				ig.game.actionText = this.actionText;
				ig.game.actionTextPos = {x: this.pos.x+this.size.x/2, y: this.pos.y};
				this.occupied = 1;
				if(ig.input.pressed('up') || ig.input.pressed('down')) {
					this.elevatorA_SFX.play();
				}
           		if(ig.input.state('up')) {
					this.elevatorB_SFX.play();
					if (this.pos.y <= this.minY) {
						this.pos.y = this.minY;
						return this.parent(other, axis);
					}
					this.pos.y -=2;
					ig.game.player.pos.y-=2;
					this.powered = 1;
					this.lastDir = -1;
				} else if(ig.input.state('down')) {
					this.elevatorB_SFX.play();
					if(this.pos.y >= this.maxY) {
						this.pos.y = this.maxY;
						return this.parent(other, axis);
					}
					this.pos.y +=2;
					ig.game.player.pos.y+=2;
					this.powered = 1;
					this.lastDir = 1;
				} else {
					this.elevatorB_SFX.stop();
					localstop = Math.floor(this.pos.y/16)*16;
					localdistance = (this.pos.y) - localstop;
					ig.show("stop", localstop);
					ig.show("dist", localdistance);
					if(localdistance > 4) {
                    	this.pos.y += this.lastDir*2;
						ig.game.player.pos.y += this.lastDir*2;
						this.powered = 1;
					} else {
                 	  	this.pos.y = localstop;
					  	ig.game.player.pos.y = localstop - ig.game.player.size.y;
					  	this.lastDir = 0;
					}
				}
			}
			return this.parent(other, axis);
		},
		triggerActivated: function(trigger) {
        	/* This function is called when the player enters a trigger zone linked to this elevator. */
			if(!this.powered) {
				/*distance = this.pos.y - (trigger.pos.y + trigger.size.y);

				if(distance < 5 && distance > 2) {
					this.pos.y -= 2;
					ig.game.player.pos.y -= 2;
				} else if (distance > -5 && distance < -2) {
					this.pos.y += 2;
					ig.game.player.pos.y += 2;
				} else if(Math.abs(distance) <= 2) {
				   this.pos.y = trigger.pos.y + trigger.size.y;	
				   ig.game.player.pos.y = this.pos.y - ig.game.player.size.y;
				}*/
			   //ig.player.pos.y = Math.floor(this.pos.y-ig.player.size.y);
			}
		}
	});
});
