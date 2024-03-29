import { Player } from "../../domain/Player/Player";
import { Team } from "../../domain/Team/Team";

export class TeamViewModel {
  private constructor(public readonly roster: Array<Player>) {
  };

  static Create(newTeam: Team) {
    const { roster } = newTeam.properties;

    return new TeamViewModel(roster);
  };


};
