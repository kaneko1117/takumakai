import {
  IMahjongRecentGamesRepository,
  MahjongRecentGamesType,
} from "@/core/usecase/recentGames";

const getRecentGames = async (): Promise<MahjongRecentGamesType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const recentGamesData: MahjongRecentGamesType[] = [
        {
          date: "2025/06/01",
          score: 50000,
          point: 20,
        },
        {
          date: "2025/06/01",
          score: 60000,
          point: 60,
        },
        {
          date: "2025/06/01",
          score: 25000,
          point: -5,
        },
        {
          date: "2025/06/01",
          score: -12000,
          point: -62,
        },
        {
          date: "2025/06/01",
          score: 62000,
          point: 52,
        },
        {
          date: "2025/06/01",
          score: 30000,
          point: 0,
        },
      ];
      resolve(recentGamesData);
    }, 1000);
  });
};

export const mahjongRecentRepository: IMahjongRecentGamesRepository = {
  getRecentGames,
};
