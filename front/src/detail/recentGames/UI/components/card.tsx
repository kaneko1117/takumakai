import {
  Card as ShadcnCard,
  CardContent,
  CardFooter,
} from "@/components/shadcn/card";

import { Calendar } from "lucide-react";

type Props = {
  date: string;
  point: string;
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
          <p></p>
        </div>
      </div>
    </CardContent>
  );
};
