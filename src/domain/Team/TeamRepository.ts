import { Team } from "./Team";

export interface TeamRepository {
  getAll(): Array<Team>;
};
