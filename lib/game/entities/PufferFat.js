ig.module(
	'game.entities.PufferFat'
)
.requires(
	'game.entities.Puffer'
)
.defines(function() {
	EntityPufferFat = EntityPuffer.extend({
		size: {x: 16, y:22},
		xpVal: 7,
		animSheet: new ig.AnimationSheet('media/Puffer_Fat.png', 16, 30)
	});
});