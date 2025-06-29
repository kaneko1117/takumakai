import {
  IMahjongPerformanceRepository,
  MahjongPerformanceType,
} from "@/core/usecase/mahjongPerformance";

const getMahjongPerformance = async (): Promise<MahjongPerformanceType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const performanceData: MahjongPerformanceType = {
        performance: [
          {
            type: "averagePoints",
            value: 123,
          },
          {
            type: "averagePlace",
            value: 2.23,
          },
          {
            type: "bestScore",
            value: 85000,
          },
          {
            type: "averageScore",
            value: 32000,
          },
        ],
      };
      resolve(performanceData);
    }, 1000);
  });
};

export const mahjongPerformanceRepository: IMahjongPerformanceRepository = {
  getMahjongPerformance,
};
