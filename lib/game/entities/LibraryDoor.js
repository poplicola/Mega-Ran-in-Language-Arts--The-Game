ig.module(
	'game.entities.LibraryDoor'
)
.requires(
	'game.entities.ActivatedZone'
)
.defines(function() {
	EntityLibraryDoor = EntityActivatedZone.extend({
		activate: function(){
			ig.game.library.currentBook = ig.game.gameState.books.length;
			ig.game.displayLibrary = true;
			this.parent();
		}
	});
});