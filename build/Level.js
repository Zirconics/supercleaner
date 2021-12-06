import Scene from './Scene.js';
import Player from './Player.js';
import Game from './Game.js';
import Garbage from './Garbage.js';
import Egg from './Egg.js';
export default class Level extends Scene {
    player;
    scoringObjects;
    countUntilNextItem;
    constructor(game) {
        super(game);
        this.player = new Player(this.game.canvas.width, this.game.canvas.height);
        this.scoringObjects = [];
        for (let i = 0; i < Game.randomNumber(3, 10); i++) {
            if (Game.randomNumber(1, 10) < 9) {
                this.scoringObjects.push(new Garbage(this.game.canvas.width, this.game.canvas.height));
            }
            else {
                this.scoringObjects.push(new Egg(this.game.canvas.width, this.game.canvas.height));
            }
        }
        this.countUntilNextItem = 300;
    }
    processInput() {
        this.player.move(this.game.canvas);
    }
    cleanUpGarbage() {
        this.scoringObjects = this.scoringObjects.filter((element) => {
            if (this.player.collidesWith(element)) {
                this.game.getUser().setScore(element.getScore());
                return false;
            }
            return true;
        });
    }
    update(elapsed) {
        if (this.player.isCleaning()) {
            this.cleanUpGarbage();
        }
        if (this.countUntilNextItem <= 0) {
            const choice = Game.randomNumber(0, 10);
            if (choice < 5) {
                this.scoringObjects.push(new Garbage(this.game.canvas.width, this.game.canvas.height));
            }
            if (choice < 1) {
                this.scoringObjects.push(new Egg(this.game.canvas.width, this.game.canvas.height));
            }
            this.countUntilNextItem = Game.randomNumber(120, 240);
        }
        this.countUntilNextItem -= elapsed;
        return null;
    }
    render() {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        const score = `Score: ${this.game.getUser().getScore()}`;
        this.game.writeTextToCanvas(score, 36, 120, 50);
        this.scoringObjects.forEach((element) => {
            element.draw(this.game.ctx);
        });
        this.player.draw(this.game.ctx);
    }
}
//# sourceMappingURL=Level.js.map