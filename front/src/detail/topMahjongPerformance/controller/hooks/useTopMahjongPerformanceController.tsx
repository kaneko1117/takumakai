import { ITopMahjongPerformanceUseCase } from "@/core/usecase/topMahjongPerformance";

export const useTopMahjongPerformanceController = (
  useCase: ITopMahjongPerformanceUseCase,
  type: string
) => {
  const methods = useCase.mahjongPerformanceMethods;
  const unitAndType = methods.handleMahjongPerformance(type);
  if (!unitAndType.type || !unitAndType.unit) {
    console.error(`Invalid type: ${type}`);
  }

  return { methods, unitAndType };
};
