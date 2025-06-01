import { RankingTypes } from "./type";

const RANKING_UNIT_MAP: Record<RankingTypes, string> = {
  averagePoints: "P",
  averagePlace: "位",
  averageScore: "点",
  bestScore: "点",
};

export const handleUnit = (type: RankingTypes): string => {
  return RANKING_UNIT_MAP[type] || "";
};

const RANKING_TYPE_MAP: Record<RankingTypes, string> = {
  averagePoints: "平均ポイント",
  averagePlace: "平均順位",
  averageScore: "平均スコア",
  bestScore: "ベストスコア",
};

export const handleType = (type: RankingTypes): string => {
  return RANKING_TYPE_MAP[type] || "";
};
