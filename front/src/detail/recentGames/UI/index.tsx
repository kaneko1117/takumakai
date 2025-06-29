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
  const repo = mahjongRecentRepository;
  const useCase = mahjongRecentGamesUseCase(repo);
  const { handleSubject, handleComma, handlePoint } =
    useMahjongRecentGamesController(useCase);
  return (
    <div className="flex flex-col gap-4">
      <p>{data.date}</p>
      <div className="flex">
        {data.performance.map((game, index) => (
          <div key={index}>
            {game.type === "score" && (
              <div>
                {handleComma(game.value)}
                {handleSubject(game.type).unit}
              </div>
            )}
            {game.type === "point" && <div>{handlePoint(game.value)}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};
