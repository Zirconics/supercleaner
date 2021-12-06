import Scene from './Scene.js';
import Player from './Player.js';
import Game from './Game.js';
import Garbage from './Garbage.js';
import Egg from './Egg.js';
import ScoringObject from './ScoringObject.js';

export default class Level extends Scene {
  private player: Player;

  private scoringObjects: ScoringObject[];

  // Amount of frames until the next item
  private countUntilNextItem: number;

  /**
   * Initialize the level
   *
   * @param game the game
   */
  public constructor(game: Game) {
    super(game);
    this.player = new Player(this.game.canvas.width, this.game.canvas.height);
    this.scoringObjects = [];

    // Create garbage items
    for (let i = 0; i < Game.randomNumber(3, 10); i++) {
      if (Game.randomNumber(1, 10) < 9) {
        this.scoringObjects.push(new Garbage(this.game.canvas.width, this.game.canvas.height));
      } else {
        this.scoringObjects.push(new Egg(this.game.canvas.width, this.game.canvas.height));
      }
    }

    // Take about 5 seconds on a decent computer to show next item
    this.countUntilNextItem = 300;
  }

  /**
   * Process the input of the user
   */
  public processInput(): void {
    this.player.move(this.game.canvas);
  }

  /**
   * Removes garbage items from the game based on box collision detection.
   *
   * Read for more info about filter function: https://alligator.io/js/filter-array-method/
   */
  private cleanUpGarbage() {
    // create a new array with garbage item that are still on the screen
    // (filter the clicked garbage item out of the array garbage items)
    this.scoringObjects = this.scoringObjects.filter((element) => {
      // check if the player is over (collided with) the garbage item.
      if (this.player.collidesWith(element)) {
        // increase score
        this.game.getUser().setScore(element.getScore());
        // Do not include this item.
        return false;
      }
      return true;
    });
  }

  /**
   * Advances the game simulation one step. It may run AI and physics (usually
   * in that order). The return value of this method determines what the `GameLoop`
   * that is animating this object will do next. If `null` is returned, the
   * GameLoop will render this scene and proceeds to the next animation frame.
   * If this methods returns a `Scene` (subclass) object, it will NOT render this
   * scene but will start considering that object as the current scene to animate.
   * In other words, by returning a Scene object, you can set the next scene to
   * animate.
   *
   * @param elapsed the time in ms that has been elapsed since the previous
   *   call
   * @returns a new `Scene` object if the game should start animating that scene
   *   on the next animation frame. If the game should just continue with the
   *   current scene, just return `null`
   */
  public update(elapsed: number): Scene {
    // Player cleans up garbage
    if (this.player.isCleaning()) {
      this.cleanUpGarbage();
    }
    // Create new items if necessary
    if (this.countUntilNextItem <= 0) {
      const choice = Game.randomNumber(0, 10);

      if (choice < 5) {
        this.scoringObjects.push(new Garbage(this.game.canvas.width, this.game.canvas.height));
      }

      if (choice < 1) {
        this.scoringObjects.push(new Egg(this.game.canvas.width, this.game.canvas.height));
      }

      // Reset the timer with a count between 2 and 4 seconds on a
      // decent computer
      this.countUntilNextItem = Game.randomNumber(120, 240);
    }

    // Lower the count until the next item with 1
    this.countUntilNextItem -= elapsed;

    return null;
  }

  /**
   * Draw the game so the player can see what happened
   */
  public render(): void {
    // Clear the screen
    this.game.ctx.clearRect(
      0,
      0,
      this.game.canvas.width,
      this.game.canvas.height,
    );
    // Show score
    const score = `Score: ${this.game.getUser().getScore()}`;
    this.game.writeTextToCanvas(score, 36, 120, 50);

    // draw each element on the screen
    this.scoringObjects.forEach((element) => {
      element.draw(this.game.ctx);
    });
    this.player.draw(this.game.ctx);
  }
}
