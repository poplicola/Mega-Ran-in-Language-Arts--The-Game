ig.module(
	'game.entities.PufferThin'
)
.requires(
	'game.entities.Puffer'
)
.defines(function() {
	EntityPufferThin = EntityPuffer.extend({
		size: {x: 13, y:25},
		animSheet: new ig.AnimationSheet('media/Puffer_Thin.png', 13, 33)
	});
});