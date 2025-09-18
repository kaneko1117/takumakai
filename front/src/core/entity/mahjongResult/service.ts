import { MahjongResult } from "./model";

const PLAYER_NUMBER = 4;
const TOTAL_SCORE = 100000;
const TOBI_BORDER = 0;

export const mahjongResultsValidation = (
  mahjongResults: Pick<MahjongResult, "score" | "isTobi" | "isTobashi">[]
): string => {
  if (mahjongResults.length !== PLAYER_NUMBER) {
    return `スコアは${PLAYER_NUMBER}人分入力してください`;
  }

  const totalScore = mahjongResults.reduce(
    (sum, result) => sum + result.score,
    0
  );
  // 4人分のスコアの合計が100,000点であることを確認
  if (totalScore !== TOTAL_SCORE) {
    return `スコアの合計が${TOTAL_SCORE}点になるようにしてください`;
  }

  if (mahjongResults.some((result) => result.isTobi)) {
    if (!mahjongResults.some((result) => result.isTobashi)) {
      return "飛ばした人を選択してください";
    }
  }

  if (mahjongResults.some((result) => result.isTobashi)) {
    if (!mahjongResults.some((result) => result.isTobi)) {
      return "飛んだ人を選択してください";
    }
  }

  return "";
};

export const isTobiChecker = (score: number): boolean => {
  return score < TOBI_BORDER;
};
