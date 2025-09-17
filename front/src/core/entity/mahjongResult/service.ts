import { MahjongResult } from "./model";

const PLAYER_NUMBER = 4;
const TOTAL_SCORE = 100000;

export const mahjongResultsValidation = (
  mahjongResults: Pick<MahjongResult, "score">[]
): string => {
  if (mahjongResults.length !== PLAYER_NUMBER) {
    return `結果は${PLAYER_NUMBER}人分入力してください`;
  }

  const totalScore = mahjongResults.reduce(
    (sum, result) => sum + result.score,
    0
  );
  // 4人分のスコアの合計が100,000点であることを確認
  if (totalScore !== TOTAL_SCORE) {
    return `スコアの合計が${TOTAL_SCORE}点になるようにしてください`;
  }

  return "";
};
