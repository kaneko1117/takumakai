import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { Card, CardContent } from "@/components/shadcn/card";
import {
  ITopMahjongPerformanceUseCase,
  TopMahjongPerformanceType,
} from "@/core/usecase/topMahjongPerformance";
import { useMahjongPerformanceController } from "../hooks/useMahjongPerformanceController";

type Props = {
  data: TopMahjongPerformanceType;
  useCase: ITopMahjongPerformanceUseCase;
};

export const RankingCard = ({ data, useCase }: Props) => {
  const { unitAndType } = useMahjongPerformanceController(useCase, data.type);
  return (
    <Card className="base-1/2">
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={data.imageUrl} className="w-20 h-20" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-lg font-bold">{data.name}</p>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xs text-gray">{unitAndType.type}</p>
            <div>
              <span className="text-primary text-base mx-1 font-bold">
                {data.score}
              </span>
              {unitAndType.unit}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
