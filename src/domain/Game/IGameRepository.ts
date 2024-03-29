import { Game } from "./Game";
import { GameParameters } from "./GameParameters";

export interface TGameRepository {
  create: (data: GameParameters) => void;
  getAll: () => Array<Game>;
  getById: (id: string) => Game;
  update: (id: string, data: GameParameters) => void;
  delete: (id: string) => void;
};
