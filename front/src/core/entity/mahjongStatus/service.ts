import { MahjongPerformanceType } from "./model";

const MAHJONG_PERFORMANCE_UNIT_MAP: Record<MahjongPerformanceType, string> = {
  averagePoints: "P",
  averagePlace: "位",
  averageScore: "点",
  bestScore: "点",
};

const MAHJONG_PERFORMANCE_TYPE_MAP: Record<MahjongPerformanceType, string> = {
  averagePoints: "平均ポイント",
  averagePlace: "平均順位",
  averageScore: "平均スコア",
  bestScore: "ベストスコア",
};

// もう少し厳密にしたい
export type MahjongPerformanceUnitAndType = {
  unit: string;
  type: string;
};

const isMahjongPerformanceType = (
  type: string
): type is MahjongPerformanceType => {
  return Object.keys(MAHJONG_PERFORMANCE_UNIT_MAP).includes(type);
};

export const handleMahjongPerformance = (
  type: string
): MahjongPerformanceUnitAndType => {
  if (isMahjongPerformanceType(type)) {
    return {
      unit: MAHJONG_PERFORMANCE_UNIT_MAP[type],
      type: MAHJONG_PERFORMANCE_TYPE_MAP[type],
    };
  }
  return {
    unit: "",
    type: "",
  };
};
