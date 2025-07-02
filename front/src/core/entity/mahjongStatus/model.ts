import {
  MahjongPerformanceUnitAndType,
  handleMahjongPerformance,
  handleMahjongPlayStyleSubject,
  formatSignedNumber,
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

export type MahjongPerformanceKey =
  | "averagePoints"
  | "averagePlace"
  | "averageScore"
  | "bestScore"
  | "score"
  | "point";

type MahjongPerformanceWrapper<T extends string, K extends object> = {
  [key in T | keyof K]: key extends T ? number : string;
};

export type MahjongPerformance = MahjongPerformanceWrapper<
  MahjongPerformanceKey,
  { id: string; date: string }
>;

export type MahjongPerformanceMethodsType = {
  handleMahjongPerformance: (type: string) => MahjongPerformanceUnitAndType;

  formatSignedNumber: (num: number) => string;
};

export const MahjongPerformanceMethods: MahjongPerformanceMethodsType = {
  handleMahjongPerformance,

  formatSignedNumber,
};
