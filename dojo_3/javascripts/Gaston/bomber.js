module.exports = Bomber;

function Bomber() {
    this.isDead = false;
}

Bomber.prototype.isIn = function() {
    return true;
}

Bomber.prototype.stepsInto = function(cell) {
    cell.occupant.bumpsWithBomber(this);
}

Bomber.prototype.isDead = function() {
    return this.isDead;
}

Bomber.prototype.bumpsInto = function(occupant) {
    occupant.bumpsWithBomber(this);
}

Bomber.prototype.kill = function() {
    this.isDead = true;
}
