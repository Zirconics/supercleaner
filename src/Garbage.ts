import ScoringObject from './ScoringObject.js';

export default class Garbage extends ScoringObject {
  /**
   * @param maxX Max value of the xPosition.
   * @param maxY Max value of the yPosition.
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/icecream.png', maxX - 32, maxY - 32, 1);
  }
}
