import {
  MahjongPerformance,
  MahjongPerformanceMethods,
  MahjongPerformanceMethodsType,
} from "@/core/entity/mahjongStatus/model";

export type MahjongRecentGamesType = Pick<
  MahjongPerformance,
  "point" | "score" | "date"
>;

export interface IMahjongRecentGamesRepository {
  getRecentGames: () => Promise<MahjongRecentGamesType[]>;
}

export interface IMahjongRecentGamesUseCase
  extends IMahjongRecentGamesRepository {
  mahjongRecentGamesMethods: MahjongPerformanceMethodsType;
}

export const mahjongRecentGamesUseCase = (
  repo: IMahjongRecentGamesRepository
): IMahjongRecentGamesUseCase => {
  return {
    mahjongRecentGamesMethods: MahjongPerformanceMethods,
    getRecentGames: repo.getRecentGames,
  };
};
