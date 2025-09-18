import {
  MahjongPerformance,
  MahjongPerformanceKey,
  MahjongPerformanceMethods,
  MahjongPerformanceMethodsType,
} from "@/core/entity/mahjongStatus/model";

export type MahjongPerformanceType = Pick<
  Pick<MahjongPerformance, MahjongPerformanceKey>,
  "averagePlace" | "averagePoints" | "bestScore" | "averageScore"
>;

export interface IMahjongPerformanceRepository {
  getMahjongPerformance: () => Promise<MahjongPerformanceType>;
}

export interface IMahjongPerformanceUseCase
  extends IMahjongPerformanceRepository {
  mahjongPerformanceMethods: MahjongPerformanceMethodsType;
}

export const mahjongPerformanceUseCase = (
  repo: IMahjongPerformanceRepository
): IMahjongPerformanceUseCase => {
  return {
    mahjongPerformanceMethods: MahjongPerformanceMethods,
    getMahjongPerformance: repo.getMahjongPerformance,
  };
};
