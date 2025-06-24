import { IMahjongPerformanceUseCase } from "@/core/usecase/mahjongPerformance";
import { ChartColumnIncreasing, CircleParking, Crown, Zap } from "lucide-react";
import { ReactNode } from "react";

export const useMahjongPerformanceController = (
  useCase: IMahjongPerformanceUseCase,
  type: string
) => {
  const methods = useCase.mahjongPerformanceMethods;
  const unitAndType = methods.handleMahjongPerformance(type);
  if (!unitAndType.type || !unitAndType.unit) {
    console.error(`Invalid type: ${type}`);
  }

  const DETAIL_ICON_MAP: Record<string, ReactNode> = {
    averagePoints: <CircleParking className="w-5 h-5 text-primary" />,
    averagePlace: <Crown className="w-5 h-5 text-primary" />,
    averageScore: <ChartColumnIncreasing className="w-5 h-5 text-primary" />,
    bestScore: <Zap className="w-5 h-5 text-primary" />,
  };

  const handleIcon = (type: string): ReactNode => {
    return DETAIL_ICON_MAP[type];
  };
  const icon = handleIcon(type);
  if (!icon) {
    console.error(`Invalid type for icon: ${type}`);
  }

  return { unitAndType, icon };
};
