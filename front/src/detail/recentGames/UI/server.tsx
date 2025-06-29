import { mahjongRecentGamesUseCase } from "@/core/usecase/recentGames";
import { mahjongRecentRepository } from "../repository";
import { getRecentGames } from "../controller/get/getRecentGames";
import { RecentGames } from ".";

export const RecentGamesServer = async () => {
  const repo = mahjongRecentRepository;
  const useCase = mahjongRecentGamesUseCase(repo);
  const { recentGamesData } = await getRecentGames(useCase);

  return recentGamesData.map((data, index) => (
    <RecentGames key={index} data={data} />
  ));
};
