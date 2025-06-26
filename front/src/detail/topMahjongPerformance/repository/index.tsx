import {
  ITopMahjongPerformanceRepository,
  TopMahjongPerformanceType,
} from "@/core/usecase/topMahjongPerformance";

const getTopMahjongPerformance = async (): Promise<
  TopMahjongPerformanceType[]
> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const performanceData: TopMahjongPerformanceType[] = [
        {
          name: "琢磨さん",
          imageUrl: "https://github.com/shadcn.png",
          type: "averagePoints",
          score: 123,
        },
        {
          name: "琢磨さん",
          imageUrl: "https://github.com/shadcn.png",
          type: "averagePlace",
          score: 2.23,
        },
        {
          name: "琢磨さん",
          imageUrl: "https://github.com/shadcn.png",
          type: "bestScore",
          score: 85000,
        },
        {
          name: "琢磨さん",
          imageUrl: "https://github.com/shadcn.png",
          type: "averageScore",
          score: 32000,
        },
      ];
      resolve(performanceData);
    }, 1000);
  });
};

export const topMahjongPerformanceRepository: ITopMahjongPerformanceRepository =
  {
    getTopMahjongPerformance,
  };
