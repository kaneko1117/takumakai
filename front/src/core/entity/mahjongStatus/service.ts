import { MahjongPerformanceKey } from "./model";

const MAHJONG_PERFORMANCE_UNIT_MAP: Record<
  Exclude<MahjongPerformanceKey, "point">,
  string
> = {
  averagePoints: "P",
  averagePlace: "位",
  averageScore: "点",
  bestScore: "点",
  score: "点",
};

const MAHJONG_PERFORMANCE_TYPE_MAP: Record<
  Exclude<MahjongPerformanceKey, "point">,
  string
> = {
  averagePoints: "平均ポイント",
  averagePlace: "平均順位",
  averageScore: "平均スコア",
  bestScore: "ベストスコア",
  score: "スコア",
};

// もう少し厳密にしたい
export type MahjongPerformanceUnitAndType = {
  unit: string;
  type: string;
};

const isMahjongPerformanceType = (
  type: string
): type is Exclude<MahjongPerformanceKey, "point"> => {
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

const MAHJONG_PLAY_STYLE_SUBJECT_MAP: Record<string, string> = {
  last_avoidance_rate: "ラス回避率",
  top_2_rate: "連対率",
  top_rate: "トップ率",
};

const isMahjongPlayStyleSubject = (
  subject: string
): subject is keyof typeof MAHJONG_PLAY_STYLE_SUBJECT_MAP => {
  return Object.keys(MAHJONG_PLAY_STYLE_SUBJECT_MAP).includes(subject);
};

export const handleMahjongPlayStyleSubject = (subject: string): string => {
  if (isMahjongPlayStyleSubject(subject)) {
    return MAHJONG_PLAY_STYLE_SUBJECT_MAP[subject];
  }
  return "";
};

// 正の整数なら+を付けて返す関数
export const formatSignedNumber = (num: number): string => {
  if (Number.isInteger(num) && num > 0) {
    return `+${num}`;
  }
  return num.toString();
};
