module.exports = Explosion;

function Explosion() {}

Explosion.prototype.damages = function(cellsReached) {
	cellsReached.forEach((cell) => cell.reachedByExplosion());

}
