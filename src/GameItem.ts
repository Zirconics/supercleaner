import Game from './Game.js';

export default abstract class GameItem {
  protected img: HTMLImageElement;

  protected xPos: number;

  protected yPos: number;

  /**
   * @param imageSrc the source of the image
   * @param maxX the max value of the xPosition.
   * @param maxY the max value of the yPostion.
   */
  public constructor(imageSrc: string, maxX: number, maxY: number) {
    this.img = Game.loadNewImage(imageSrc);
    this.xPos = Game.randomNumber(0, maxX);
    this.yPos = Game.randomNumber(0, maxY);
  }

  /**
   * Method that return the image height of GameItem.
   *
   * @returns the heigth of the image.
   */
  public getImageHeigt(): number {
    return this.img.height;
  }

  /**
   * Method that return the image width of GameItem.
   *
   * @returns the width of the image
   */
  public getImageWidth(): number {
    return this.img.width;
  }

  /**
   * Method that return the XPos of GameItem.
   *
   * @returns the position of X.
   */
  public getXPos(): number {
    return this.xPos;
  }

  /**
   * Method that return the YPos of GameItem.
   *
   * @returns the position of Y.
   */
  public getYPos(): number {
    return this.yPos;
  }

  /**
   * Method that draws the image of the item on the canvas;
   *
   * @param ctx CanvasRenderingContext2D
   */
  public draw(ctx: CanvasRenderingContext2D): void {
    ctx.drawImage(this.img, this.xPos, this.yPos);
  }
}
