import {
  IMahjongPerformanceRepository,
  MahjongPerformanceType,
} from "@/core/usecase/mahjongPerformance";

const getMahjongPerformance = async (): Promise<MahjongPerformanceType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const performanceData: MahjongPerformanceType[] = [
        {
          type: "averagePoints",
          score: 123,
        },
        {
          type: "averagePlace",
          score: 2.23,
        },
        {
          type: "bestScore",
          score: 85000,
        },
        {
          type: "averageScore",
          score: 32000,
        },
      ];
      resolve(performanceData);
    }, 1000);
  });
};

export const mahjongPerformanceRepository: IMahjongPerformanceRepository = {
  getMahjongPerformance,
};
