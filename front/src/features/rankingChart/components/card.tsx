import {
  Card as ShadcnCard,
  CardContent,
  CardFooter,
} from "@/components/shadcn/card";
import { ReactNode } from "react";
import { RankingChartType } from "../type";

type Props = {
  children: ReactNode;
  data: RankingChartType[];
};

export const Card = ({ children, data }: Props) => {
  return (
    <ShadcnCard className="w-full flex flex-col items-center justify-center gap-4 p-4 bg-white shadow-md rounded-lg">
      <h2 className="font-bold">プレイスタイル分析</h2>
      <CardContent className="flex flex-col items-center justify-center gap-4 relative h-[280px]">
        {children}
      </CardContent>
      <CardFooter className="text-center text-sm text-gray-500 flex gap-2">
        {data.map((item, index) => (
          <p key={index}>
            {item.subject}:{" "}
            <span className="text-primary font-bold text-base">
              {item.percentage}%
            </span>
          </p>
        ))}
      </CardFooter>
    </ShadcnCard>
  );
};
