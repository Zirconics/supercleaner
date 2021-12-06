import GameItem from './GameItem.js';

export default class ScoringObject extends GameItem {
  private score: number;

  /**
   * @param imageSrc Source of image
   * @param maxX max of x position
   * @param maxY max of y position
   * @param score score
   */
  public constructor(imageSrc: string, maxX: number, maxY: number, score: number) {
    super(imageSrc, maxX, maxY);
    this.score = score;
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
