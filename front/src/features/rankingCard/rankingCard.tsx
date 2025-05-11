import { Card, CardContent, CardFooter } from "@/components/shadcn/card";
import { CircleParking } from "lucide-react";

export const RankingCard = () => {
  return (
    <Card className="w-1/2 bg-bgGray">
      <CardContent className="flex items-center justify-left gap-2 bg-white text-primary">
        <CircleParking className="rounded-md p-1 shadow-sm" size={40} />
        <p className="font-bold text-lg">長谷川</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center justify-left gap-2 text-sm text-gray">
          <p>平均ポイント</p>
          <p>+124</p>
        </div>
      </CardFooter>
    </Card>
  );
};
