import { TeamRepository } from "../../domain/Team/TeamRepository";
import { TeamViewModel } from "./TeamViewModel";

export class GetTeams {
  constructor(private readonly teams: TeamRepository) {
  };

  async execute(): Promise<Array<TeamViewModel>> {
    const teams = this.teams.getAll();
    return teams.map(TeamViewModel.Create);
  };
};
