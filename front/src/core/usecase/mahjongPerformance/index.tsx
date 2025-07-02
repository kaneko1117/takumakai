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

export interface IMahjongPerformanceUseCase {
  mahjongPerformanceMethods: MahjongPerformanceMethodsType;
  getMahjongPerformance: () => Promise<MahjongPerformanceType>;
}
export interface IMahjongPerformanceRepository {
  getMahjongPerformance: () => Promise<MahjongPerformanceType>;
}

export const mahjongPerformanceUseCase = (
  repo: IMahjongPerformanceRepository
): IMahjongPerformanceUseCase => {
  return {
    mahjongPerformanceMethods: MahjongPerformanceMethods,
    getMahjongPerformance: repo.getMahjongPerformance,
  };
};
