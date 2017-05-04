module.exports = Bomber;

var Bomb = require('./bomb');

function Bomber() {
    this.bomberIsDead = false;
}

Bomber.prototype.isIn = function() {
    return true;
}

Bomber.prototype.stepsInto = function(cell) {
	this.bomberCell = cell;
    cell.occupant.bumpsWithBomber(this);
}

Bomber.prototype.isDead = function() {
    return this.bomberIsDead;
}

Bomber.prototype.bumpsInto = function(occupant) {
    occupant.bumpsWithBomber(this);
}

Bomber.prototype.kill = function() {
    this.bomberIsDead = true;
}

Bomber.prototype.dropBomb = function() {
	return new Bomb();
}
