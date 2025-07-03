import { IMahjongPerformanceUseCase } from "@/core/usecase/mahjongPerformance";

export const getPerformance = async (useCase: IMahjongPerformanceUseCase) => {
  const fetcher = useCase.getMahjongPerformance;
  const performanceData = await fetcher();
  if (!performanceData) {
    throw new Error("No performance data found");
  }

  return { performanceData };
};
