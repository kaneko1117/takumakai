import { IMahjongRecentGamesUseCase } from "@/core/usecase/recentGames";

export const useMahjongRecentGamesController = (
  useCase: IMahjongRecentGamesUseCase
) => {
  // hooksでmethodsの処理をしないと、ただ助長なhooksになってしまうのが痛い。
  const methods = useCase.mahjongRecentGamesMethods;
  const handlePoint = methods.formatSignedNumber;

  return {  handlePoint };
};
