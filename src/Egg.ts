import ScoringObject from './ScoringObject.js';

export default class Egg extends ScoringObject {
  /**
   * @param maxX Max value of the xPosition.
   * @param maxY Max value of the yPosition.
   */
  public constructor(maxX: number, maxY: number) {
    super('./assets/img/egg.png', maxX - 50, maxY - 64, -5);
  }
}
