import { mahjongResultsValidation, isTobiChecker } from "./service";

export type MahjongResult = {
  id: string;
  userId: string;
  userName: string;
  hanshuangId: string;
  gameId: string;
  score: number;
  isTobi: boolean;
  isTobashi: boolean;
};

export type GameResultMethodsType = {
  mahjongResultsValidation: (
    gameResults: Pick<MahjongResult, "score" | "isTobi" | "isTobashi">[]
  ) => string;
  isTobiChecker: (score: number) => boolean;
};

export const GameResultMethods: GameResultMethodsType = {
  mahjongResultsValidation,
  isTobiChecker,
};
