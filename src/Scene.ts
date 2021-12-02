import Game from './Game.js';

export default class Scene {
  private game: Game;

  public constructor(game: Game) {
    this.game = game;
  }

  public processInput(): void {

  }

  // public update(elapsed: number): Scene {

  // }

  public render(): void {

  }

  /**
   *
   * @param text a
   * @param xCoordinate a
   * @param yCoordinate a
   * @param fontSize a
   * @param color a
   * @param alignment a
   */
  protected writeTextToCanvas(
    text: string,
    xCoordinate: number,
    yCoordinate: number,
    fontSize: number,
    color: string,
    alignment: CanvasTextAlign = 'center',
  ): void {

  }
}
