type RankingChartSubject = "ラス回避率" | "連対率" | "トップ率";

type InferredRankingChartType<T extends { subject: RankingChartSubject }> =
  T extends { subject: infer U } ? U : never;

export type RankingChartType = {
  subject: RankingChartSubject;
  percentage: number;
};
