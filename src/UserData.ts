export default class UserData {
  private name: string;

  private score: number;

  private level: number;

  /**
   * Constructor of UserData.
   */
  public constructor() {
    this.name = 'Bob';
    this.score = 0;
    this.level = 1;
  }

  /**
   * Getter for the name of UserData.
   *
   * @returns The name of the user.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Method updates the name to a new name.
   *
   * @param name New value of name.
   */
  public setName(name: string) {
    this.name = name;
  }

  /**
   * Getter for the score of UserData.
   *
   * @returns The score of the user.
   */
  public getScore(): number {
    return this.score;
  }

  /**
   * Method that adds new points to the current score.
   *
   * @param points Score value.
   */
  public addScore(points: number): void {
    this.score += points;
  }

  /**
   * Getter for the level of UserData.
   *
   * @returns The level of the game.
   */
  public getLevel(): number {
    return this.level;
  }

  /**
   * Method that increases the level by 1 point.
   */
  public increaseLevel(): void {
    this.level += 1;
  }
}
