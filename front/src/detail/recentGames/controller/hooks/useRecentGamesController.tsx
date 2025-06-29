import { IMahjongRecentGamesUseCase } from "@/core/usecase/recentGames";

export const useMahjongRecentGamesController = (
  useCase: IMahjongRecentGamesUseCase,
  type: string
) => {
  const methods = useCase.mahjongRecentGamesMethods;
  const unitAndType = methods.handleMahjongPlayStyleSubject(type);
  if (!unitAndType) {
    console.error(`Invalid type: ${type}`);
  }

  return { methods, unitAndType };
};
