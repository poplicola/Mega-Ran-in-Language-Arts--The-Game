ig.module('game.entities.ElevatorStop')
.requires('game.entities.trigger')
.defines(function() {
	EntityElevatorStop = EntityTrigger.extend({
		size: {x: 32, y: 32},
		type: ig.Entity.TYPE.B,
		checkAgainst: ig.Entity.TYPE.A,
		collides: ig.Entity.COLLIDES.NEVER,
		_wmDrawBox: true,
		_wmBoxColor: 'rgba(196, 255, 154, 0.7)'
	});
});
