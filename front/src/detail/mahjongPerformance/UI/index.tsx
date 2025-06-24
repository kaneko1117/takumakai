import { Card, CardContent } from "@/components/shadcn/card";
import {
  IMahjongPerformanceUseCase,
  MahjongPerformanceType,
} from "@/core/usecase/mahjongPerformance";
import { useMahjongPerformanceController } from "../controller/hooks/useMahjongPerformanceController";

type Props = {
  data: MahjongPerformanceType;
  useCase: IMahjongPerformanceUseCase;
};

export const DetailCard = ({ data, useCase }: Props) => {
  const { unitAndType, icon } = useMahjongPerformanceController(
    useCase,
    data.type
  );
  return (
    <Card className="base-1/2">
      <CardContent className="flex flex-col justify-left gap-2">
        <p className="text-gray flex justify-between items-center">
          {unitAndType.type}
          <span>{icon}</span>
        </p>
        <p className="text-xl font-bold text-primary">
          {data.score}
          <span className="text-sm text-gray ml-1">{unitAndType.unit}</span>
        </p>
      </CardContent>
    </Card>
  );
};
