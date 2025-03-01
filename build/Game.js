import UserData from './UserData.js';
import GameLoop from './GameLoop.js';
import Level from './Level.js';
export default class Game {
    canvas;
    ctx;
    user;
    gameLoop;
    level;
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.level = new Level(this);
        this.user = new UserData('Rimmert');
        this.gameLoop = new GameLoop();
        this.gameLoop.start(this.level);
    }
    getUser() {
        return this.user;
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = 'center', color = 'white') {
        this.ctx.font = `${fontSize}px sans-serif`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
//# sourceMappingURL=Game.js.map