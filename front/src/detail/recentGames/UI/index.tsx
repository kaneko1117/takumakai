"use client";
import {
  MahjongRecentGamesType,
  mahjongRecentGamesUseCase,
} from "@/core/usecase/recentGames";
import { mahjongRecentRepository } from "../repository";
import { useMahjongRecentGamesController } from "../controller/hooks/useRecentGamesController";
import { CardPointContents } from "./components/card";

type Props = {
  data: MahjongRecentGamesType;
};

export const RecentGames = ({ data }: Props) => {
  const repo = mahjongRecentRepository;
  const useCase = mahjongRecentGamesUseCase(repo);
  const { handleSubject, handleComma, handlePoint } =
    useMahjongRecentGamesController(useCase);
  return (
    <>
      {data.performance.map((game, index) => (
        <div key={index}>
          {game.type === "point" && (
            <CardPointContents
              date={data.date}
              point={handlePoint(game.value)}
            />
          )}
          {game.type === "score" && (
            <div>
              {handleComma(game.value)}
              {handleSubject(game.type).unit}
            </div>
          )}
        </div>
      ))}
    </>
  );
};
