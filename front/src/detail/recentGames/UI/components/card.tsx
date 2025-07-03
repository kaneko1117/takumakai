import { Card as ShadcnCard, CardContent } from "@/components/shadcn/card";
import { Progress } from "@/components/shadcn/progress";

import { Calendar } from "lucide-react";
import { ReactNode } from "react";

type Props = {
  date: string;
  point: ReactNode;
};

export const CardPointContents = ({ date, point }: Props) => {
  return (
    <CardContent className="flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-gray gap-1">
          <Calendar className="w-4 h-4" />
          <p className="text-gray">{date}</p>
        </div>
        <div>
          <p>{point}</p>
        </div>
      </div>
    </CardContent>
  );
};

export const CardScoreContents = ({ score }: { score: number }) => {
  const MAX_SCORE = 60000;
  return (
    <CardContent className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <p className="text-gray">スコア</p>
        <p className="font-bold text-lg">{score.toLocaleString()}</p>
      </div>
      <div>
        <Progress value={(score / MAX_SCORE) * 100} />
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray">0</p>
          <p className="text-sm text-gray">{MAX_SCORE.toLocaleString()}</p>
        </div>
      </div>
    </CardContent>
  );
};

export const CardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ShadcnCard className="w-full p-2 gap-4 shadow-none py-5">
      {children}
    </ShadcnCard>
  );
};
