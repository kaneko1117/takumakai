import {
  MahjongPerformance,
  MahjongPerformanceMethods,
  MahjongPerformanceMethodsType,
} from "@/core/entity/mahjongStatus/model";

export type MahjongRecentGamesType = Pick<
  MahjongPerformance,
  "date" | "performance"
>;

export interface IMahjongRecentGamesUseCase {
  mahjongRecentGamesMethods: MahjongPerformanceMethodsType;
  getRecentGames: () => Promise<MahjongRecentGamesType[]>;
}

export interface IMahjongRecentGamesRepository {
  getRecentGames: () => Promise<MahjongRecentGamesType[]>;
}

export const mahjongRecentGamesUseCase = (
  repo: IMahjongRecentGamesRepository
): IMahjongRecentGamesUseCase => {
  return {
    mahjongRecentGamesMethods: MahjongPerformanceMethods,
    getRecentGames: repo.getRecentGames,
  };
};
