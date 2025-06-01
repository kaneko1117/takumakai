import { ReactNode } from "react";
import { ChartColumnIncreasing, CircleParking, Crown, Zap } from "lucide-react";

import { DetailTypes } from "./type";

const DETAIL_UNIT_MAP: Record<DetailTypes, string> = {
  averagePoints: "P",
  averagePlace: "位",
  averageScore: "点",
  bestScore: "点",
};

export const handleUnit = (type: DetailTypes): string => {
  return DETAIL_UNIT_MAP[type] || "";
};

const DETAIL_TYPE_MAP: Record<DetailTypes, string> = {
  averagePoints: "平均ポイント",
  averagePlace: "平均順位",
  averageScore: "平均スコア",
  bestScore: "ベストスコア",
};

export const handleType = (type: DetailTypes): string => {
  return DETAIL_TYPE_MAP[type] || "";
};

const DETAIL_ICON_MAP: Record<DetailTypes, ReactNode> = {
  averagePoints: <CircleParking className="w-5 h-5 text-primary" />,
  averagePlace: <Crown className="w-5 h-5 text-primary" />,
  averageScore: <ChartColumnIncreasing className="w-5 h-5 text-primary" />,
  bestScore: <Zap className="w-5 h-5 text-primary" />,
};

export const handleIcon = (type: DetailTypes): ReactNode => {
  return DETAIL_ICON_MAP[type] || <CircleParking />;
};
