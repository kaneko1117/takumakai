import { IMahjongRecentGamesUseCase } from "@/core/usecase/recentGames";

export const getRecentGames = async (useCase: IMahjongRecentGamesUseCase) => {
  const fetcher = useCase.getRecentGames;
  const recentGamesData = await fetcher();
  if (!recentGamesData || recentGamesData.length === 0) {
    throw new Error("No recent games data found");
  }
  return { recentGamesData };
};
