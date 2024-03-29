import { Player } from "../Player/Player";
import { TeamParameters } from "./TeamParameters";

export class Team {
  #roster: Array<Player>;

  private constructor(newTeamParameters: TeamParameters) {
    this.#roster = newTeamParameters.roster;
  };

  static create(newTeamParameters: TeamParameters): Team {
    return new Team(newTeamParameters);
  };

  get properties(): TeamParameters {
    return {
      roster: this.roster,
    };
  };

  get roster() {
    return this.#roster;
  };
};
