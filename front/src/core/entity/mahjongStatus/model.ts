import {
  MahjongPerformanceUnitAndType,
  handleMahjongPerformance,
} from "./service";

type PlayStyleSubjectType = "last_avoidance_rate" | "top_2_rate" | "top_rate";

export type MahjongPlayStyle = {
  id: string;
  subject: PlayStyleSubjectType;
  percentage: number;
};

export type MahjongPerformanceType =
  | "averagePoints"
  | "averagePlace"
  | "averageScore"
  | "bestScore";

export type MahjongPerformance = {
  id: string;
  type: MahjongPerformanceType;
  score: number;
};

export type MahjongPerformanceMethodsType = {
  handleMahjongPerformance: (type: string) => MahjongPerformanceUnitAndType;
};

export const MahjongPerformanceMethods: MahjongPerformanceMethodsType = {
  handleMahjongPerformance,
};
