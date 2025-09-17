import { mahjongResultsValidation } from "./service";

export type MahjongResult = {
  id: string;
  userId: string;
  userName: string;
  hanshuangId: string;
  gameId: string;
  score: number;
  isTobi: boolean;
};

export type GameResultMethodsType = {
  mahjongResultsValidation: (
    gameResults: Pick<MahjongResult, "score">[]
  ) => string;
};

export const GameResultMethods: GameResultMethodsType = {
  mahjongResultsValidation,
};
