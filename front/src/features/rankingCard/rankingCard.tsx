import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { Card, CardContent } from "@/components/shadcn/card";
import { RankingCardProps } from "./type";

type Props = {
  data: RankingCardProps;
};

export const RankingCard = ({ data }: Props) => {
  return (
    <Card className="base-1/2">
      <CardContent className="flex flex-col items-center justify-center gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src={data.imageUrl} className="w-20 h-20" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-lg font-bold">{data.name}</p>
          <p className="text-xs text-gray">
            {data.type}
            <span className="text-primary text-base ml-1">{data.value}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
