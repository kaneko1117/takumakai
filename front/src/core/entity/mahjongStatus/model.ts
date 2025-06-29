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
  | "bestScore"
  | "score"
  | "point";

export type MahjongPerformance = {
  id: string;
  performance: { type: MahjongPerformanceType; value: number }[];
  date: string;
};

export type MahjongPerformanceMethodsType = {
  handleMahjongPerformance: (type: string) => MahjongPerformanceUnitAndType;
};

export const MahjongPerformanceMethods: MahjongPerformanceMethodsType = {
  handleMahjongPerformance,
};
