import { PlayerParameters } from "./PlayerParameters";

export class Player {
  private constructor(
    private readonly newPlayerArgs: PlayerParameters
    ) {
  };

  create(newPlayerArgs: PlayerParameters) {
    new Player(newPlayerArgs); 
  };

  get properties() {
    return { ...this.newPlayerArgs };
  };
};
