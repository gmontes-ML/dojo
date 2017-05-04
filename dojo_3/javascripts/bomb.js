module.exports = Bomb;

const Explosion = require('./explosion');

function Bomb() {}

Bomb.prototype.tick = function() {
	return new Explosion();
}
