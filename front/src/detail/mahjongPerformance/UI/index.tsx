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

const PerformanceCard = ({
  useCase,
  type,
  value,
}: Pick<Props, "useCase"> & {
  type: keyof MahjongPerformanceType;
  value: number;
}) => {
  const { unitAndType, icon } = useMahjongPerformanceController(useCase, type);
  return (
    <Card className="base-1/2">
      <CardContent className="flex flex-col justify-left gap-2">
        <p className="text-gray flex justify-between items-center">
          {unitAndType.type}
          <span>{icon}</span>
        </p>
        <p className="text-xl font-bold text-primary">
          {value}
          <span className="text-sm text-gray ml-1">{unitAndType.unit}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export const DetailCard = ({ data, useCase }: Props) => {
  const performanceType: Array<keyof MahjongPerformanceType> = [
    "averagePlace",
    "averageScore",
    "averagePoints",
    "bestScore",
  ];
  return performanceType.map((type) => (
    <PerformanceCard
      key={type}
      useCase={useCase}
      type={type}
      value={data[type]}
    />
  ));
};
