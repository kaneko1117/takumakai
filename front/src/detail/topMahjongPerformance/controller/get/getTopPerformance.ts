import { ITopMahjongPerformanceUseCase } from "@/core/usecase/topMahjongPerformance";

export const getTopPerformance = async (
  useCase: ITopMahjongPerformanceUseCase
) => {
  const fetcher = useCase.getTopMahjongPerformance;
  const performanceData = await fetcher();
  if (!performanceData || performanceData.length === 0) {
    throw new Error("No Top performance data found");
  }

  return { performanceData };
};
