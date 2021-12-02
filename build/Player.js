import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';
export default class Player extends GameItem {
    xVelocity;
    yVelocity;
    keyboard;
    constructor(maxX, maxY) {
        super('./assets/img/character_robot_walk0.png', maxX - 76, maxY - 92);
        this.keyboard = new KeyListener();
        this.xVelocity = 15;
        this.yVelocity = 15;
    }
    move(canvas) {
        if (this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)
            && this.xPos + this.img.width < canvas.width) {
            this.xPos += this.xVelocity;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_LEFT)
            && this.xPos > 0) {
            this.xPos -= this.xVelocity;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_UP)
            && this.yPos > 0) {
            this.yPos -= this.yVelocity;
        }
        if (this.keyboard.isKeyDown(KeyListener.KEY_DOWN)
            && this.yPos + this.img.height < canvas.height) {
            this.yPos += this.yVelocity;
        }
    }
    isCleaning() {
        if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
            return true;
        }
        return false;
    }
    collidesWith(other) {
        return this.getXPos() < other.getXPos() + other.getImageWidth()
            && this.getXPos() + this.getImageWidth() > other.getXPos()
            && this.getYPos() < other.getYPos() + other.getImageHeigt()
            && this.getYPos() + this.getImageHeigt() > other.getYPos();
    }
}
//# sourceMappingURL=Player.js.map