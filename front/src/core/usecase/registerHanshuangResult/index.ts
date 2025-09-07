import { HanshuangResult } from "@/core/entity/hanshuangResult/model";
import { User } from "@/core/entity/users/model";

export type PlayerTypes = Pick<User, "id" | "name">[];
export type HanshuangResultTypes = HanshuangResult[];
export type GameType = Pick<HanshuangResult, "gameId">;

export interface IRegisterHanshuangResultRepository {
  getPlayers: () => Promise<PlayerTypes>;
  RegisterHanshuangResults: (
    hanshuangResults: HanshuangResultTypes
  ) => Promise<void>;
  getHanshuangResults: (hanshuangID: string) => Promise<HanshuangResultTypes>;
  getGame: () => Promise<GameType>;
}
