import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { Card, CardContent } from "@/components/shadcn/card";
import { MemberCardType } from "./type";

type Props = {
  data: MemberCardType;
};

export const MemberCard = ({ data }: Props) => {
  return (
    <Card className="w-full border-none shadow-none p-2">
      <CardContent className="flex items-center justify-left gap-2 px-0">
        <Avatar className="w-15 h-15">
          <AvatarImage src={data.imageUrl} className="w-15 h-15" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h3>{data.name}</h3>
          <p className="text-sm text-gray-500">{data.department}</p>
        </div>
      </CardContent>
    </Card>
  );
};
