export type RankingTypes =
  | "averagePoints"
  | "averagePlace"
  | "averageScore"
  | "bestScore";

export type RankingCardType = {
  name: string;
  imageUrl: string;
  type: RankingTypes;
  value: number;
};
