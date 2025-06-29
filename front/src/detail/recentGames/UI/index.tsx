"use client";
import {
  MahjongRecentGamesType,
  mahjongRecentGamesUseCase,
} from "@/core/usecase/recentGames";
import { mahjongRecentRepository } from "../repository";
import { useMahjongRecentGamesController } from "../controller/hooks/useRecentGamesController";

type Props = {
  data: MahjongRecentGamesType;
};

export const RecentGames = ({ data }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <p>{data.date}</p>
      <div className="flex">
        {data.performance.map((game, index) => (
          <div>
            {game.type === "score" && <div key={index}>{game.value}点</div>}
            {game.type === "point" && (
              <div key={index}>{game.value}ポイント</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
