"use client";
import {
  MahjongRecentGamesType,
  mahjongRecentGamesUseCase,
} from "@/core/usecase/recentGames";
import { mahjongRecentRepository } from "../repository";
import { useMahjongRecentGamesController } from "../controller/hooks/useRecentGamesController";
import {
  CardLayout,
  CardPointContents,
  CardScoreContents,
} from "./components/card";

type Props = {
  data: MahjongRecentGamesType;
};

export const RecentGames = ({ data }: Props) => {
  const repo = mahjongRecentRepository;
  const useCase = mahjongRecentGamesUseCase(repo);
  const { Point } = useMahjongRecentGamesController(useCase, data.point);
  return (
    <CardLayout>
      <CardPointContents date={data.date} point={Point} />
      <CardScoreContents score={data.score} />
    </CardLayout>
  );
};
