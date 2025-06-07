import {
  Card as ShadcnCard,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/shadcn/card";
import { ReactNode } from "react";
import { RankingChartType } from "../type";

type Props = {
  children: ReactNode;
  data: Pick<RankingChartType, "percentage">[];
};

export const Card = ({ children, data }: Props) => {
  return (
    <ShadcnCard className="w-full flex flex-col items-center justify-center gap-4 p-4 bg-white shadow-md rounded-lg">
      <CardHeader className="text-center text-lg font-semibold">
        <h2>プレイスタイル分析</h2>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4 relative h-[300px]">
        {children}
      </CardContent>
      {data.map((item, index) => (
        <CardFooter key={index} className="text-center text-sm text-gray-500">
          <span>勝率: {item.percentage}%</span>
        </CardFooter>
      ))}
    </ShadcnCard>
  );
};
