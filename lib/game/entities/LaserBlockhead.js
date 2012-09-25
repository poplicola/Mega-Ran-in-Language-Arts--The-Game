ig.module(
	'game.entities.LaserBlockhead'
)
.requires(
	'game.entities.MirrorBlockhead'
)
.defines(function() {
	EntityLaserBlockhead = EntityMirrorBlockhead.extend({
		animSheet: new ig.AnimationSheet('media/Blockhead_Laserman.png', 18, 27)
	});
});