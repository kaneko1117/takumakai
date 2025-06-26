import {
  MahjongPerformanceUnitAndType,
  handleMahjongPerformance,
  handleMahjongPlayStyleSubject,
} from "./service";

export type MahjongPlayStyleSubjectType =
  | "last_avoidance_rate"
  | "top_2_rate"
  | "top_rate";

export type MahjongPlayStyle = {
  id: string;
  subject: MahjongPlayStyleSubjectType;
  percentage: number;
};

export type MahjongPlayStyleMethodsType = {
  handleMahjongPlayStyleSubject: (subject: string) => string;
};

export const MahjongPlayStyleMethods: MahjongPlayStyleMethodsType = {
  handleMahjongPlayStyleSubject,
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
