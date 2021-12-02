import GameItem from './GameItem.js';
import KeyListener from './KeyListener.js';

export default class Player extends GameItem {
  private xVelocity: number;

  private yVelocity: number;

  private keyboard: KeyListener;

  /**
   * Constructor of Player
   *
   * @param maxX Max value of the xCoordinate.
   * @param maxY Max value of the yCoordinate.
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/character_robot_walk0.png', maxX - 76, maxY - 92);
    this.keyboard = new KeyListener();
    this.xVelocity = 15;
    this.yVelocity = 15;
  }

  /**
   * Method that moves the player.
   *
   * @param canvas canvas
   */
  public move(canvas: HTMLCanvasElement): void {
    // Moving right
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_RIGHT)
      && this.xPos + this.img.width < canvas.width
    ) {
      this.xPos += this.xVelocity;
    }

    // Moving left
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_LEFT)
      && this.xPos > 0
    ) {
      this.xPos -= this.xVelocity;
    }

    // Moving up
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_UP)
      && this.yPos > 0
    ) {
      this.yPos -= this.yVelocity;
    }

    // Moving down
    if (
      this.keyboard.isKeyDown(KeyListener.KEY_DOWN)
      && this.yPos + this.img.height < canvas.height
    ) {
      this.yPos += this.yVelocity;
    }
  }

  /**
   * Method that cleans
   *
   * @returns true if the player is cleaning
   *          or false when the player is not cleaning.
   */
  public isCleaning(): boolean {
    if (this.keyboard.isKeyDown(KeyListener.KEY_SPACE)) {
      return true;
    }
    return false;
  }

  /**
   * Method that check the collision.
   *
   * @param other GameItem
   * @returns true if the player collides with the GameItem
   *          or false when no collision has been triggered..
   */
  public collidesWith(other: GameItem): boolean {
    return this.getXPos() < other.getXPos() + other.getImageWidth()
    && this.getXPos() + this.getImageWidth() > other.getXPos()
    && this.getYPos() < other.getYPos() + other.getImageHeigt()
    && this.getYPos() + this.getImageHeigt() > other.getYPos();
  }
}
