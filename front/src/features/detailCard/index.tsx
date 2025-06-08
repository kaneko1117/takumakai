import { Card, CardContent } from "@/components/shadcn/card";
import { DetailCardType } from "./type";
import { handleIcon, handleType, handleUnit } from "./helper";

type Props = {
  data: DetailCardType;
};

export const DetailCard = ({ data }: Props) => {
  return (
    <Card className="base-1/2">
      <CardContent className="flex flex-col justify-left gap-2">
        <p className="text-gray flex justify-between items-center">
          {handleType(data.type)}
          <span>{handleIcon(data.type)}</span>
        </p>
        <p className="text-xl font-bold text-primary">
          {data.value}
          <span className="text-sm text-gray ml-1">
            {handleUnit(data.type)}
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
