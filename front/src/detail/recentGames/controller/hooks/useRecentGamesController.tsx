import { IMahjongRecentGamesUseCase } from "@/core/usecase/recentGames";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cva } from "class-variance-authority";

export const useMahjongRecentGamesController = (
  useCase: IMahjongRecentGamesUseCase,
  point: number
) => {
  // hooksでmethodsの処理をしないと、ただ助長なhooksになってしまうのが痛い。
  const methods = useCase.mahjongRecentGamesMethods;
  const format = methods.formatSignedNumber(point);

  const pointVariants = cva(
    "font-bold rounded-md px-2 py-1 flex items-center gap-1",
    {
      variants: {
        point: {
          positive: "text-primary bg-primary/10",
          negative: "text-red-500 bg-red-500/10",
        },
      },
      defaultVariants: {
        point: "positive",
      },
    }
  );

  const handlePoint = (point: number) => {
    const isPositive = point >= 0;
    const Icon = isPositive ? TrendingUp : TrendingDown;
    return (
      <div
        className={pointVariants({
          point: isPositive ? "positive" : "negative",
        })}
      >
        <Icon width={15} height={15} />
        {format}
      </div>
    );
  };

  const Point = handlePoint(point);

  return { Point };
};
