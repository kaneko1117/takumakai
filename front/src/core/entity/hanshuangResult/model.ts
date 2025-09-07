import { hanshuangResultsValidation, scoreValidation } from "./service";

export type HanshuangResult = {
  id: string;
  userId: string;
  gameId: string;
  score: number;
  isTobi: boolean;
};

export type GameResultMethodsType = {
  hanshuangResultsValidation: (
    gameResults: Pick<HanshuangResult, "score">[]
  ) => string;
  scoreValidation: (score: number) => string;
};

export const GameResultMethods: GameResultMethodsType = {
  hanshuangResultsValidation,
  scoreValidation,
};
