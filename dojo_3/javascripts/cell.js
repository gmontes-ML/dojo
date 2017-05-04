module.exports = Cell;

function Cell() {}

function Cell(occupant) {
	this.occupant = occupant;
}

Cell.prototype.reachedByExplosion = function() {
	this.occupant.destroy();
}
