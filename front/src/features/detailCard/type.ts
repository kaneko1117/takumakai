export type DetailTypes =
  | "averagePoints"
  | "averagePlace"
  | "averageScore"
  | "bestScore";

export type DetailCardType = {
  type: DetailTypes;
  value: number;
};
