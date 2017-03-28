const chai = require('chai');

const Bomber = require('../bomber');
const Cell = require('../cell');
const Wall = require('../wall');
const Enemy = require('../enemy');
const Empty = require('../empty');
//const Something = require('../something');

describe("bomberman", () => {
    describe("bomberman", () => {
        it("steps into a cell which is empty then it moves in", () => {
            empty = new Empty()
            bomber = new Bomber();
            cell = new Cell(empty);
            bomber.stepsInto(cell);

            chai.assert.equal(bomber.isIn(cell), true);
        });

        it("steps into a cell which is busy with an object then it doesn't move and throw an exception", () => {
            wall = new Wall();
            cell = new Cell(wall);
            bomber = new Bomber();

            chai.assert.throws(() => {bomber.stepsInto(cell)}, "Error");
        });

        it("steps into a cell which is busy with an enemy then it dies", () => {
            enemy = new Enemy();
            cell = new Cell(enemy);
            bomber = new Bomber();

            bomber.stepsInto(cell);

            chai.assert.equal(bomber.isDead, true);
        });

        it.skip("leaves a boom next to a brick, the boom explotes and the bricks disappears", () => {
        });

        it.skip("throws a boom to a brick, the boom explotes and the bricks disappears", () => {
        });
    });

});
