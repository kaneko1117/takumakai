import {
  MahjongPerformance,
  MahjongPerformanceMethods,
  MahjongPerformanceMethodsType,
} from "@/core/entity/mahjongStatus/model";
import { User } from "@/core/entity/users/model";

export type TopMahjongPerformanceType = {
  type: keyof MahjongPerformance;
  value: number;
} & Pick<User, "imageUrl" | "name">;

export interface ITopMahjongPerformanceUseCase {
  mahjongPerformanceMethods: MahjongPerformanceMethodsType;
  getTopMahjongPerformance: () => Promise<TopMahjongPerformanceType[]>;
}
export interface ITopMahjongPerformanceRepository {
  getTopMahjongPerformance: () => Promise<TopMahjongPerformanceType[]>;
}

export const mahjongPerformanceUseCase = (
  repo: ITopMahjongPerformanceRepository
): ITopMahjongPerformanceUseCase => {
  return {
    mahjongPerformanceMethods: MahjongPerformanceMethods,
    getTopMahjongPerformance: repo.getTopMahjongPerformance,
  };
};
