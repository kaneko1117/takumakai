import {
  MahjongPerformance,
  MahjongPlayStyleMethods,
  MahjongPlayStyleMethodsType,
} from "@/core/entity/mahjongStatus/model";

export type MahjongRecentGamesType = Pick<
  MahjongPerformance,
  "date" | "performance"
>;

export interface IMahjongRecentGamesUseCase {
  mahjongRecentGamesMethods: MahjongPlayStyleMethodsType;
  getRecentGames: () => Promise<MahjongRecentGamesType[]>;
}

export interface IMahjongRecentGamesRepository {
  getRecentGames: () => Promise<MahjongRecentGamesType[]>;
}

export const mahjongRecentGamesUseCase = (
  repo: IMahjongRecentGamesRepository
): IMahjongRecentGamesUseCase => {
  return {
    mahjongRecentGamesMethods: MahjongPlayStyleMethods,
    getRecentGames: repo.getRecentGames,
  };
};
