module.exports = Brick;

function Brick() {
	this.brickDestroyed = false;
}

Brick.prototype.isDestroyed = function() {
	return this.brickDestroyed;
}

Brick.prototype.destroy = function() {
	this.brickDestroyed = true;
}

