ig.module(
	'game.entities.SmokeBlockhead'
)
.requires(
	'game.entities.MirrorBlockhead'
)
.defines(function() {
	EntitySmokeBlockhead = EntityMirrorBlockhead.extend({
		animSheet: new ig.AnimationSheet('media/Blockhead_Smokeman.png', 18, 27)
	});
});