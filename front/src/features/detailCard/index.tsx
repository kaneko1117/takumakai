import { Card, CardContent } from "@/components/shadcn/card";
import { DetailCardType } from "./type";
import { handleType, handleUnit } from "./helper";

type Props = {
  data: DetailCardType;
};

export const DetailCard = ({ data }: Props) => {
  return (
    <Card className="base-1/2">
      <CardContent className="flex flex-col items-center justify-left gap-2">
        <p className="text-gray">{handleType(data.type)}</p>
        <p className="text-lg font-bold">
          {data.value}
          <span className="text-md text-gray">{handleUnit(data.type)}</span>
        </p>
      </CardContent>
    </Card>
  );
};
