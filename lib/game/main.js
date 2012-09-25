ig.module( 
	'game.main'
)
.requires(
	'impact.game',
	'impact.font',
	'game.entities.projectile',
	'game.levels.MirrorMan',
	'game.levels.LaserMan', 
	'game.levels.Base',
	'game.levels.smoke_level2',
	'game.levels.Sandbox',
	'plugins.impact-splash-loader',
	'game.levels.ShadowArena',
	'plugins.screen-fader'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	gameItem: new ig.Sound('media/audio/gameItem.*'),
	powerUp: new ig.Sound('media/audio/powerUp.*'),
	selectSFX: new ig.Sound('media/audio/menuSelect.*'),
	fireballA: new ig.Sound('media/audio/fireballA.*'),
	fireballB: new ig.Sound('media/audio/fireballB.*'),
	fireballC: new ig.Sound('media/audio/fireballC.*'),
	fireballD: new ig.Sound('media/audio/fireballD.*'),
	
	autoSort:false,
	cameraStop:false,
	gravity:400,
	font: new ig.Font( 'media/04b03.font.png' ),
	greenfont: new ig.Font( 'media/04b03.font.green.png' ),
	redfont: new ig.Font( 'media/04b03.font.red.png' ),
	player: undefined,
	boss: undefined,
	lifebar: undefined,
	paused: false,
	fader: undefined,
	levelup: {
		displayed: false,
		selections: ["Attack Power", "Attack Range", "Health"],
		selected: 0,
		healthIncrement: 10,
		attackIncrement: 2,
		rangeIncrement: 16
	},
	library: {
		currentBook: -1,
		reading_panel_width: 11,
		reading_panel_height: 14
	},
	actionText: undefined,
	actionTextPos: {x:0, y:0},
	hudImage: new ig.Image( 'media/textbox.png'),
	lifeImage: new ig.Image( 'media/Healthbar.png'),
	blastImage: new ig.Image('media/projectile.png'),
	libraryImage: new ig.Image('media/library.png'),
	megaRanAnim: new ig.AnimationSheet('media/Random.png', 32, 40),
	bookImage: new ig.Image('media/Books.png'),
	levels: {},
	allowInput: true,
	allowFire: true,
	state: 0x0,
	xpLevels: [0, 100, 250, 500, 1000, 1500, 2000, 3000, 5000, 8000, 15000, 25000, 50000],
	respawnPosition: {x:0,y:0},
	cameraFlipped: false,
	gameState: undefined,
	saveTimer: undefined,
	store: undefined,
	done_loading: false,
	defaultGameState: {
		key: 'state',
    	lives: 3,
		level: 1,
		maxHealth: 100,
		experience: 0,
		deaths: 0,
		weaponPower: 5,
		weaponRange: 160,
		books: [],
		collectables: {},
		constructions: {},
		statPoints: 0,
		has_double_jump: 0,
		has_wall_buster: 0,
		smokeman_defeated: 0,
		mirrorman_defeated: 0,
		laserman_defeated: 0
	},
	hudLayout: [[1,1,3,1,1,1,1,3,1,1,1,1,1,1,1,3,1,1,1,1],
				[5,5,7,5,5,5,5,7,5,5,5,5,5,5,5,7,5,5,5,5]],
	init: function() {
		this.store = new Lawnchair({name: 'gameState'}, function(store) {
			store.get('state', function(gamestate){
				if(gamestate == undefined){
					store.save(ig.game.defaultGameState);
					gamestate = ig.game.defaultGameState;
				} 
				ig.game.gameState = gamestate;
			});
			for(setting in ig.game.defaultGameState){
				if(ig.game.gameState[setting] == undefined)
				{
					ig.game.gameState[setting] = ig.game.defaultGameState[setting];
				}
			}
			ig.game.done_loading = true;
		});
		this.megaran_idle = new ig.Animation(this.megaRanAnim, 0.1, [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]);
		this.megaran_idle.flip.x = true;
		this.fader = new ig.ScreenFader({fade: 'out', callback: this._doneLoading, context: { direction: 'out', music: undefined}});
		// Initialize your game here; bind keys etc.
		ig.input.bind(ig.KEY.SPACE, 'jump');
		ig.input.bind(ig.KEY.CTRL, 'jump');
		ig.input.bind(ig.KEY.ENTER, 'fire');
		ig.input.bind(ig.KEY.ALT, 'fire');
		ig.input.bind(ig.KEY.UP_ARROW, 'up');
		ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind(ig.KEY.A, 'left');
		ig.input.bind(ig.KEY.D, 'right');
		ig.input.bind(ig.KEY.W, 'up');
		ig.input.bind(ig.KEY.S, 'down');
		ig.input.bind(ig.KEY.L, 'levelup');
		ig.input.bind(ig.KEY.P, "pause");
		ig.music.add('media/audio/smokeman.*', 'smokeman');
		ig.music.add('media/audio/mirrorZone.*', 'mirrorZone');
		ig.music.add('media/audio/shadowArena.*', 'shadowArena');
		ig.music.add('media/audio/laserZone.*', 'laserZone');
		ig.music.add('media/audio/8bitFly.*', '8bitFly');
		ig.music.loop = true;
		ig.music.volume = 0.8;
		ig.music.play('8bitFly');
		this.levels["SmokeMan"] = LevelSmoke_level2;
		this.levels["MegaBase"] = LevelBase;
		this.levels["MirrorMan"] = LevelMirrorMan;
		this.levels["LaserMan"] = LevelLaserMan;
		this.levels["Sandbox"] = LevelSandbox;
		this.levels["ShadowArena"] = LevelShadowArena;
		this.loadLevel(LevelBase);
		this.shotTimer = new ig.Timer();
		this.firstShot=true;
		this.saveTimer = new ig.Timer(5);
		// Mute the sound
		$('#mute').click(function(){
			if(ig.music.volume!=0) {
				ig.music.volume=0;
				ig.soundManager.volume=0;
				$(this).text('Unmute');
			} else {
				ig.music.volume=1;
				ig.soundManager.volume=1;
				$(this).text('Mute');
			}
		});
	},
	update: function() {
		
		// Pause the game
		if(this.done_loading){
			if(ig.input.pressed('reset')) {
				this.gameState = this.defaultGameState;
			}
			if(this.saveTimer.delta() > 0)
			{
				this.store.save(this.gameState);
				this.saveTimer.reset();
				ig.mark('save');
			}
			
			if(this.gameState.experience >= this.xpLevels[this.gameState.level]){
				this.gameState.experience = this.gameState.experience-this.xpLevels[this.gameState.level];
				this.gameState.statPoints++;
				this.gameState.level++;

			}

			if(ig.input.pressed('pause'))
			{
				this.paused = !this.paused;
				ig.game.selectSFX.play();
			} else if (this.gameState.statPoints > 0 && ig.input.pressed('levelup')) {
				this.levelup.displayed = true;
			}
			
			if (this.displayLibrary) {
				/* Handle input for library */
				if(ig.input.pressed('up')) {
					this.library.currentBook = ((this.library.currentBook+this.gameState.books.length)%(this.gameState.books.length+1));
				} else if (ig.input.pressed('down')){
					this.library.currentBook = ((this.library.currentBook+1)%(this.gameState.books.length+1));
				} else if (ig.input.pressed('fire')) {
					this.selectSFX.play();
					if(this.library.currentBook == this.gameState.books.length) {
						this.displayLibrary = 0;
						return;
					}

					book = this.gameState.books[this.library.currentBook];
					if(!book.read) {
						_gaq.push(["_trackEvent", "Items", "Read Book", book.name, undefined, true]);
						if(book.bonus == "health") {
							this.gameState.maxHealth = this.gameState.maxHealth + book.value;
						} else if (book.bonus == "range") {
							this.gameState.weaponRange=this.gameState.weaponRange + book.value;
						} else if (book.bonus == "attack") {
							this.gameState.weaponPower=this.gameState.weaponPower + book.value;
						} else if (book.bonus == "double-jump") {
							this.gameState.has_double_jump = 1;
						}
						book.read = 1;
						this.store.save(this.gameState);
					}
				}
				this.megaran_idle.update();
				return;
			}
			
			if (this.levelup.displayed){
				/* Handle input for level up */
				if(ig.input.pressed('up')){
					this.levelup.selected = ((this.levelup.selected+2)%3);
				} else if (ig.input.pressed('down')) {
					this.levelup.selected = ((this.levelup.selected+1)%3);
				} else if (ig.input.pressed('fire')) {
					_gaq.push(["_trackEvent", "Levels", "LevelUp", undefined, undefined, true]);
					switch(this.levelup.selected){
						case 0:
							this.gameState.weaponPower = this.gameState.weaponPower + this.levelup.attackIncrement;
							_gaq.push(["_trackEvent", "Levels", "Increase Power", this.gameState.weaponPower, undefined, true]);
						break;
						case 1:
							this.gameState.weaponRange = this.gameState.weaponRange + this.levelup.rangeIncrement;
							_gaq.push(["_trackEvent", "Levels", "Increase Range", this.gameState.weaponRange, undefined, true]);
						break;
						case 2:
							this.gameState.maxHealth = this.gameState.maxHealth + this.levelup.healthIncrement;
							this.player.health = this.player.health + this.levelup.healthIncrement;
							_gaq.push(["_trackEvent", "Levels", "Increase Health", this.gameState.maxHealth, undefined, true]);
						break;
					}
					this.gameState.statPoints = this.gameState.statPoints - 1;
					/* force a save now so this can't get lost */
					this.store.save(this.gameState);
					
					if(this.gameState.statPoints == 0){
						this.levelup.selection = 0;
						this.levelup.displayed = false;
					}
				}
				/* Bail out before doing other stuff */
				return;
			}

			if (this.paused) return;

			// Update all entities and backgroundMaps
			this.actionText = undefined;
			this.cameraStop = false;

			this.player = this.getEntitiesByType(EntityMegaran)[0];
			if(this.player) {
				if(this.cameraStop == false) {
					this.screen.x = this.player.pos.x - ig.system.width/2;
				}
			}
			this.boss = this.getEntitiesByType(EntityBossenemy)[0];

			if(this.allowInput && ig.input.pressed('fire')) {
				
				shot_frequency = this.shotTimer.tick();
				
				if (shot_frequency>1.5 || this.firstShot==true) {
					ig.game.fireballA.play();
					this.firstShot=false;
					this.secondShot=true;
					this.thirdShot=true;
				} else if (shot_frequency>1 || this.secondShot==true) {
					ig.game.fireballB.play();
					this.secondShot=false;
				} else if (shot_frequency>0.5 || this.thirdShot==true) {
					ig.game.fireballC.play();
					this.thirdShot=false;
				} else {
					ig.game.fireballD.play();
				}
				
	         	/* Add a projectile at the player position. */
				if(this.player != undefined)
					this.player.fire();
			}
			this.parent();
			this.cameraFlipped=false;
		}
	},
	
	draw: function() {
		// Draw pause screen
		if(this.done_loading){
			
			if (this.paused) {
				this.font.draw(" - Paused - ", ig.system.width/2, 232, ig.Font.ALIGN.CENTER);
				// Return to stop anything else drawing
				return;                
			}
		
			if (this.displayLibrary) {
				/* Handle input for library */
				ig.system.clear("#000000");
				/* Draw library near top left */
				this.libraryImage.draw(7, 7);
				this.megaran_idle.draw(50, 73);
				
				for(i=0;i<this.library.reading_panel_height;i++){
					for(j=0;j<this.library.reading_panel_width;j++){
						tile=0;
						if(i==0){
							switch(j){
								case 0:
									tile=0;
									break;
								case this.library.reading_panel_width-1:
									tile=2;
									break;
								default:
									tile=1;
								break;
							}
						}else if(i == (this.library.reading_panel_height - 1)){
							switch(j){
								case 0:
									tile=8;
									break;
								case this.library.reading_panel_width-1:
									tile=10;
									break;
								default:
									tile=9;
								break;
							}
						} else {
							switch(j){
								case 0:
									tile=4;
									break;
								case this.library.reading_panel_width-1:
									tile=6;
									break;
								default:
									tile=5;
								break;
							}
						}
						this.hudImage.drawTile(16*j+137, 16*i+7, tile, 16);
					}
				}
				for(i=0;i<this.gameState.books.length;i++){
					book = this.gameState.books[i];
					/* Draw book @ 145 */
					if(i==this.library.currentBook) {
						this.font.draw("->", 145, 24+i*18, ig.Font.ALIGN.LEFT);
					}
					this.bookImage.drawTile(155, 20+i*18, book.image, 16);
					this.font.draw(book.name, 177, 22+i*18);
					if(!book.read) {
						this.greenfont.draw("NEW!", 300, 22+i*18, ig.Font.ALIGN.RIGHT);
						if(book.bonus == "health") {
							this.font.draw("LIFE UP! (" + this.gameState.maxHealth + " -> " + (this.gameState.maxHealth + book.value) +")", 177, 29+i*18);
						} else if (book.bonus == "range") {
							this.font.draw("RANGE UP! (" + this.gameState.weaponRange + " -> " + (this.gameState.weaponRange + book.value)+")", 177, 29+i*18);
						} else if (book.bonus == "attack") {
							this.font.draw("ATTACK UP! (" + this.gameState.weaponPower + " -> " + (this.gameState.weaponPower + book.value)+")", 177, 29+i*18);
						} else if (book.bonus == "double-jump") {
							this.font.draw("Shadow Jump technique", 177, 29+i*18);
						}
					}
				}
				if(this.library.currentBook == this.gameState.books.length) {
					this.font.draw("->", 137+11*8-this.font.widthForString("Back to the MegaBase")/2-this.font.widthForString("->"), 200, ig.Font.ALIGN.LEFT);
				}
				this.font.draw("Back to the MegaBase", 137+11*8, 200, ig.Font.ALIGN.CENTER);
				this.font.draw("MegaBase\nLibrary", 70, 215, ig.Font.ALIGN.CENTER);
				return;
			}
		
			// Draw all entities and backgroundMaps
			this.parent();
			this.drawUI();

			if(this.levelup.displayed){
				/* Draw level-up screen */
				this.drawLevelUp();
			} else {
				this.drawNotification();
			}
			
			/* Draw the screen fader */
			this.fader.draw();
		}
	},
	_doneLoading: function() {
		if(this.direction == 'in') {
			ig.music.play(this.music);
			ig.game.loadLevelDeferred(this.level);
			ig.game.fader = new ig.ScreenFader({fade: 'out', callback: ig.game._doneLoading, context: {direction: 'out', music:undefined}})
		} else {
			/* We just finished fading in, don't need to do anything */
		}
	},
	drawUI: function() {
		/* Draw health bars */
		/* 320x240, so let's give Ran 100 px, and the enemy 100 px. */
		leftAnchor = {x:35, y:24};
		if(ig.game.player != undefined){
			nBars = ig.game.gameState.maxHealth/4;
			for(i=0;i<nBars;i++){
				if(i*4<ig.game.player.health){
					this.lifeImage.drawTile(2*i+leftAnchor.x, leftAnchor.y, 0, 3, 8);
				} else {
					this.lifeImage.drawTile(2*i+leftAnchor.x, leftAnchor.y, 5, 3, 8);
				}
			}
			/* Draw the portrait */
			if(ig.game.player.portrait){
				ig.game.player.portrait.draw(leftAnchor.x-ig.game.player.portrait.width+10, leftAnchor.y-ig.game.player.portrait.height/2);
			}
		}
		
		rightAnchor = {x:280, y:24};
		if(ig.game.boss != undefined) {
			nBars = ig.game.boss.maxHealth/4;
			for(i=0;i<nBars;i++){
				if(i*4<ig.game.boss.health){
					this.lifeImage.drawTile(rightAnchor.x-2*i, rightAnchor.y, ig.game.boss.healthTile, 3, 8);
				} else {
					this.lifeImage.drawTile(rightAnchor.x-2*i, rightAnchor.y, 5, 3, 8);
				}
			}
			/* Draw the portrait */
			if(ig.game.boss.portrait){
				ig.game.boss.portrait.draw(rightAnchor.x-7, rightAnchor.y-ig.game.boss.portrait.height/2);
			}
		}
		
		/* Draw HUD */
		for(i=0;i<2;i++) {
			for(j=0;j<20;j++) {
				this.hudImage.drawTile(16*j, 214+16*i, this.hudLayout[i][j], 16);
			}
		}
		this.hudImage.drawTile(4, 222, 12, 16);
		this.font.draw("x" + ig.game.gameState.lives, 22, 230);
		this.font.draw("Level " + this.gameState.level, 48, 222);
		this.font.draw("Next " + this.gameState.experience + "/" + this.xpLevels[this.gameState.level], 56, 230);

		/* Draw equipment */
		if(this.gameState.has_double_jump) {
        	this.hudImage.drawTile(144, 222, 13, 16);		
		}
		
		if(this.gameState.statPoints > 0) {
			this.font.draw("(L)evel up!", 262, 227);
		}
	},
	drawNotification: function() {
		
		/* If there is active action text, show it above the player */
		if(this.actionText != undefined && this.player != undefined){
			strWidth = this.font.widthForString(this.actionText);
			textCenter = {x:this.actionTextPos.x - this.screen.x, y:Math.min(this.actionTextPos.y, this.player.pos.y) - 20 - this.screen.y};
			numTiles = Math.ceil(strWidth/8+2);
			tile=0;
			for(i=0;i<numTiles;i++){
				for(j=0;j<3;j++){
						if(i==0){
							switch(j){
								case 0:
									tile=0;
									break;
								case 1:
									tile=8;
									break;
								case 2:
									tile=40;
								break;
							}
						} else if(i == (numTiles-1)){
							switch(j){
								case 0:
									tile=5;
									break;
								case 1:
									tile=13;
									break;
								case 2:
									tile=45;
								break;
							}
						} else {
							switch(j){
								case 0:
									tile=1;
									break;
								case 1:
									tile=9;
									break;
								case 2:
									tile=41;
								break;
							}
						}
					this.hudImage.drawTile(8*i+textCenter.x-numTiles*4, 8*j+textCenter.y-10, tile, 8);
				}
			}
			this.font.draw(this.actionText, textCenter.x, textCenter.y, ig.Font.ALIGN.CENTER);
			
		}
	},
	drawLevelUp: function() {
		for(i=0;i<8;i++){
			for(j=0;j<7;j++){
				tile=0;
				if(i==0){
					switch(j){
						case 0:
							tile=0;
							break;
						case 6:
							tile=2;
							break;
						default:
							tile=1;
						break;
					}
				} else if(i == (1) || i==6){
						switch(j){
							case 0:
								tile=16;
								break;
							case 6:
								tile=18;
								break;
							default:
								tile=17;
							break;
						}
				}else if(i == (7)){
					switch(j){
						case 0:
							tile=8;
							break;
						case 6:
							tile=10;
							break;
						default:
							tile=9;
						break;
					}
				} else {
					switch(j){
						case 0:
							tile=4;
							break;
						case 6:
							tile=6;
							break;
						default:
							tile=5;
						break;
					}
				}
				this.hudImage.drawTile(16*j+104, 16*i+42, tile, 16);
			}
		}
		/* Draw text */
		this.font.draw("Level Up!", 160, 52, ig.Font.ALIGN.CENTER);
		
		/* Draw options */
		for(i=0;i<this.levelup.selections.length;i++) {
			if(i==this.levelup.selected) {
				ig.game.font.draw("->", 115, 75 + 20*i, ig.Font.ALIGN.LEFT);
			}
			ig.game.font.draw(this.levelup.selections[i], 125, 75 + 20*i, ig.Font.ALIGN.LEFT);
			switch(i){
				case 0:
					ig.game.font.draw("  " + this.gameState.weaponPower + " -> " + (this.gameState.weaponPower + this.levelup.attackIncrement), 125, 85 + 20*i, ig.Font.ALIGN.LEFT);	
				break;
				case 1:
					ig.game.font.draw("  " + this.gameState.weaponRange + " -> " + (this.gameState.weaponRange + this.levelup.rangeIncrement), 125, 85 + 20*i, ig.Font.ALIGN.LEFT);
				break;
				case 2:
					ig.game.font.draw("  " + this.gameState.maxHealth + " -> " + (this.gameState.maxHealth + this.levelup.healthIncrement), 125, 85 + 20*i, ig.Font.ALIGN.LEFT);
				break;
			}
		}
		
		this.font.draw(this.gameState.statPoints + " points left", 160, 150, ig.Font.ALIGN.CENTER);
	},
	
	gameOver: function() {
		ig.finalStats = ig.game.gameState;
		this.gameState.lives=3;
		_gaq.push(["_trackEvent", "Game Events", "Game Over", undefined, undefined, true]);
		this.store.save(this.gameState);
		
		ig.system.setGame(GameOverScreen);
	}
});

Credits = ig.Game.extend({
	instructText: new ig.Font('media/04b03.font.png'),
	credits: [
		'Executive Producers',
		'Raheem \"Mega Ran\" Jarbo',
		'Scott Arnold',
		'',
		'Director of Development / Lead Programmer',
		'Russ Lankenau',
		'',
		'Sound Programmer',
		'Jay Margalus',
		'',
		'Artificial Intelligence Programmer',
		'Adam Eidukas',
		'',
		'Lead Artist',
		'Neil Wickman',
		'',
		'Background Artist',
		'Ashley Lankenau',
		'',
		'Concept Artists / Character Designers',
		'Jason Richardson',
		'Thor Thorvaldson',
		'',
		'Web Design',
		'Jay Margalus',
		'',
		'Level Designers',
		'Neil Wickman',
		'Jay Margalus',
		'Russ Lankenau',
		'',
		'Music',
		'Raheem \"Mega Ran\" Jarbo',
		'Melvin \"DN3\" Raymond',
		'',
		'Sound Designer',
		'George Hufnagl',
		'',
		'Special Thanks',
		'Adam T',
		'Alex Reeves',
		'Alex Riedl',
		'Angel Vazquez',
		'Anthony Bucchioni',
		'BakaLyte',
		'Brian Wyckoff',
		'Bryan Kissel',
		'Carlos Mansilla',
		'Carolina! & Kyron!',
		'Charles Mooney',
		'Chris Hall',
		'Daniel Torres',
		'David Flores',
		'Dino Goldie',
		'DJ Jazzpants',
		'Donovan MacLure',
		'Force Of Will',
		'Forrest Fujio-Gates',
		'HeiligeGeert',
		'James (@thecoffeepunk)',
		'Jareth Arnold',
		'Jason Roop',
		'Jeremy Lentz',
		'Jeriaska',
		'Jimmy Brewster',
		'Jimmy Corvan',
		'Jonathan Richards',
		'Jordan Dodds',
		'Josh Ibrahim',
		'Justin Johnston',
		'Kyre',
		'Larry Fine',
		'Leon',
		'Matthew Stordeur',
		'Michael Cooper',
		'nathan oatmeal francis',
		'nexas777',
		'Paul Bunyan',
		'Paul Thacker',
		'Sean Aaron',
		'Sean Caylor',
		'Seiler Hagan',
		'Seth Dodson',
		'Stanley yip',
		'Steven Rolph',
		'Tanner Garrett',
		'TheEnemy',
		'Trevor Brummitt',
		'Troy D Patterson',
		'Wesley Phillips',
		'William Brylow'
	],
		background: new ig.Image('media/stars.png'),
		selectSFX: new ig.Sound('media/audio/menuSelect.*'),
		init: function(){
			ig.input.bind(ig.KEY.SPACE, 'start');
			this.creditsTimer = new ig.Timer();
		},
		update: function(){
			if (ig.input.pressed('start')){
				ig.system.setGame(MyGame);
				ig.game.selectSFX.play();
			}
			this.parent();
		},
		draw: function(){
			this.parent();
			this.background.draw(0,0);
			
			
			
			var x1 = ig.system.width/2;
			var y1 = ig.system.height - 5;
			var y2 = ig.system.height - 50;
			var credit_counter = 0;
			var indent = 0;
			this.instructText.draw('Credits', x1, 5, ig.Font.ALIGN.CENTER);
			credit_counter = this.creditsTimer.delta()*7;
			/* Use a counter for actual arrays.  jQuery adds methods to the array class that come up as elements, and stuff freaks out. */
			for(i=0;i<this.credits.length;i++) {
				this.instructText.draw(this.credits[i], x1, y2+indent-credit_counter, ig.Font.ALIGN.CENTER);
				indent = indent + 8;
			}
			this.instructText.draw('Press Spacebar to Start', x1, y2+this.creditsTimer, ig.Font.ALIGN.CENTER);
		}
});

StartScreen = ig.Game.extend({
	instructText: new ig.Font('media/04b03.font.png'),
	selectSFX: new ig.Sound('media/audio/menuSelect.*'),
		background: new ig.Image('media/select_screen.jpg'),
		init: function(){
			ig.input.bind(ig.KEY.SPACE, 'start');
			ig.input.bind(ig.KEY.ENTER, 'credits');
			ig.music.add('media/audio/splash.*', 'splash');
			ig.music.play('splash');
		},
		update: function(){
			if (ig.input.pressed('start')){
				ig.system.setGame(MyGame);
				ig.game.selectSFX.play();
			}
			if (ig.input.pressed('credits')){
				ig.system.setGame(Credits);
				ig.game.selectSFX.play();
			}
			this.parent();
		},
		draw: function(){
			this.parent();
			this.background.draw(0,0);
			var x = ig.system.width/2;
			var y = ig.system.height - 50;
			this.instructText.draw('Press Spacebar to Start', x, y, ig.Font.ALIGN.CENTER);
			this.instructText.draw('Press Enter for Credits', x, y-30, ig.Font.ALIGN.CENTER);
		}
});

GameOverScreen = ig.Game.extend({
	instructText: new ig.Font('media/04b03.font.png'),
	background: new ig.Image('media/stars.png'),
	gameOver: new ig.Image('media/stars.png'),
	selectSFX: new ig.Sound('media/audio/menuSelect.*'),
	stats: {},
	init: function() {
		ig.input.bind(ig.KEY.SPACE, 'start');
		this.stats = ig.finalStats;
	},
	update: function() {
		if(ig.input.pressed('start')) {
			ig.system.setGame(StartScreen);
			ig.game.selectSFX.play();
		}
		this.parent();
	},
	draw: function() {
		this.parent();
		this.background.draw(0,0);
		var x = ig.system.width/2;
		var y = ig.system.height - 50;
		this.gameOver.draw(x - (this.gameOver.width * .5), y-30);
		var level = this.stats.level;
		var experience = this.stats.experience;
		this.instructText.draw('Level: '+level, x, y-40, ig.Font.ALIGN.CENTER);
		this.instructText.draw('Experience: '+experience, x, y-30, ig.Font.ALIGN.CENTER);
		this.instructText.draw('Press Spacebar To Continue', x, y, ig.Font.ALIGN.CENTER);
	}
});


// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
ig.main( '#canvas', StartScreen, 60, 320, 240, 2, ig.ImpactSplashLoader);

});
