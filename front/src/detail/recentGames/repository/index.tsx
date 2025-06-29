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
          performance: [
            { type: "score", value: 50000 },
            {
              type: "point",
              value: 20,
            },
          ],
        },
        {
          date: "2025/06/01",
          performance: [
            { type: "score", value: 60000 },
            {
              type: "point",
              value: 60,
            },
          ],
        },
        {
          date: "2025/06/01",
          performance: [
            { type: "score", value: 25000 },
            {
              type: "point",
              value: -5,
            },
          ],
        },
        {
          date: "2025/06/01",
          performance: [
            { type: "score", value: -12000 },
            {
              type: "point",
              value: -62,
            },
          ],
        },
        {
          date: "2025/06/01",
          performance: [
            { type: "score", value: 62000 },
            {
              type: "point",
              value: 52,
            },
          ],
        },
        {
          date: "2025/06/01",
          performance: [
            { type: "score", value: 30000 },
            {
              type: "point",
              value: 0,
            },
          ],
        },
      ];
      resolve(recentGamesData);
    }, 1000);
  });
};

export const mahjongRecentRepository: IMahjongRecentGamesRepository = {
  getRecentGames,
};
