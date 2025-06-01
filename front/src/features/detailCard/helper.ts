import { DetailTypes } from "./type";

const RANKING_UNIT_MAP: Record<DetailTypes, string> = {
  averagePoints: "P",
  averagePlace: "位",
  averageScore: "点",
  bestScore: "点",
};

export const handleUnit = (type: DetailTypes): string => {
  return RANKING_UNIT_MAP[type] || "";
};

const RANKING_TYPE_MAP: Record<DetailTypes, string> = {
  averagePoints: "平均ポイント",
  averagePlace: "平均順位",
  averageScore: "平均スコア",
  bestScore: "ベストスコア",
};

export const handleType = (type: DetailTypes): string => {
  return RANKING_TYPE_MAP[type] || "";
};
