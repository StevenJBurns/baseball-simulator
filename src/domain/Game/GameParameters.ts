import { Team } from '../Team/Team';
import { Venue } from '../Venue/Venue';

export type TStart = {
  scheduled: string,
  actual: string,
}

export type GameParameters = {
  start: Required<TStart>,
  venue: Venue;
  awayTeam: Team;
  homeTeam: Team;
};
