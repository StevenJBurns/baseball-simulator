import { GameParameters } from './GameParameters.ts';

export class Game {
  private constructor(private readonly newGameParameters: GameParameters) {
  };

  static create(newGameParameters: Required<GameParameters>) {
    return new Game(newGameParameters);
  };

  get properties() {
    return {
      ...this.newGameParameters,
    };
  };
};
