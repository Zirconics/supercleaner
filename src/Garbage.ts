import GameItem from './GameItem.js';

export default class Garbage extends GameItem {
  private score: number;

  /**
   * @param maxX Max value of the xPosition.
   * @param maxY Max value of the yPosition.
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/icecream.png', maxX - 32, maxY - 32);
    this.score = 1;
  }

  /**
   * Method that returns the score of the Garbage item.
   *
   * @returns the score of the Garbage item.
   */
  public getScore(): number {
    return this.score;
  }
}
