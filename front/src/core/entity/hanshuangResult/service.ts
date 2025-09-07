import { HanshuangResult } from "./model";

const PLAYER_NUMBER = 4;
const TOTAL_SCORE = 100000;

export const hanshuangResultsValidation = (
  hanshuangResults: Pick<HanshuangResult, "score">[]
): string => {
  if (hanshuangResults.length !== PLAYER_NUMBER) {
    return `結果は${PLAYER_NUMBER}人分入力してください`;
  }

  const totalScore = hanshuangResults.reduce(
    (sum, result) => sum + result.score,
    0
  );
  // 4人分のスコアの合計が100,000点であることを確認
  if (totalScore !== TOTAL_SCORE) {
    return `スコアの合計が${TOTAL_SCORE}点になるようにしてください`;
  }

  return "";
};

export const scoreValidation = (score: number): string => {
  if (typeof score !== "number") {
    return "スコアは数値で入力してください";
  }
  if (!Number.isInteger(score)) {
    return "スコアは整数で入力してください";
  }
  // スコアはマイナスもありえるので、ここではチェックしない
  return "";
};
