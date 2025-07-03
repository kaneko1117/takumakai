import {
  IMahjongPerformanceRepository,
  MahjongPerformanceType,
} from "@/core/usecase/mahjongPerformance";

const getMahjongPerformance = async (): Promise<MahjongPerformanceType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const performanceData: MahjongPerformanceType = {
        averagePoints: 123,
        averagePlace: 2.23,
        bestScore: 85000,
        averageScore: 32000,
      };
      resolve(performanceData);
    }, 1000);
  });
};

export const mahjongPerformanceRepository: IMahjongPerformanceRepository = {
  getMahjongPerformance,
};
