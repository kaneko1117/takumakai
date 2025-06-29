import {
  MahjongPerformance,
  MahjongPerformanceMethods,
  MahjongPerformanceMethodsType,
} from "@/core/entity/mahjongStatus/model";

export type MahjongPerformanceType = Pick<MahjongPerformance, "performance">;

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
