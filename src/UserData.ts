export default class UserData {
  private name: string;

  private score: number;

  private level: number;

  /**
   * Initialize UserData
   *
   * @param name name of the player
   */
  public constructor(name: string) {
    this.name = name;
    this.level = 1;
    this.score = 0;
  }

  /**
   * Get name of the plyer
   *
   * @returns name of the player
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Set name of the player
   *
   * @param name - set of the player
   */
  public setName(name: string): void {
    this.name = name;
  }

  /**
   * Get score of the player
   *
   * @returns score of the player
   */
  public getScore(): number {
    return this.score;
  }

  /**
   * Set score of the player
   *
   * @param points - set score of the player
   */
  public setScore(points: number): void {
    this.score += points;
  }

  /**
   * Get level of the player
   *
   * @returns level of the player
   */
  public getLevel(): number {
    return this.level;
  }

  /**
   * Increase the level of the player
   */
  public increaseLevel(): void {
    this.level += 1;
  }
}
