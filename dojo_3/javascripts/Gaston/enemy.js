module.exports = Enemy;

function Enemy() {}

Enemy.prototype.bumpsWithBomber = function(bomber) {
	bomber.kill();
}
