import {
  Card as ShadcnCard,
  CardContent,
  CardFooter,
} from "@/components/shadcn/card";
import { ReactNode } from "react";
import {
  IMahjongPlayStyleUseCase,
  MahjongPlayStyleType,
} from "@/core/usecase/mahjongPlayStyle";
import { useMahjongPlayStyleController } from "../../controller/hooks/useMahjongPlayStyleController";

type Props = {
  children: ReactNode;
  data: MahjongPlayStyleType[];
  useCase: IMahjongPlayStyleUseCase;
};

export const Card = ({ children, data, useCase }: Props) => {
  const { formattedData } = useMahjongPlayStyleController(useCase, data);
  return (
    <ShadcnCard className="w-full flex flex-col items-center justify-center gap-4 p-4 bg-white shadow-md rounded-lg">
      <h2 className="font-bold">プレイスタイル分析</h2>
      <CardContent className="flex flex-col items-center justify-center gap-4 relative h-[280px]">
        {children}
      </CardContent>
      <CardFooter className="text-center text-sm text-gray-500 flex gap-2">
        {formattedData.map((item, index) => (
          <p key={index}>
            {item.subject}:　
            <span className="text-primary font-bold text-base">
              {item.percentage}%
            </span>
          </p>
        ))}
      </CardFooter>
    </ShadcnCard>
  );
};
