import { Card as ShadcnCard, CardContent } from "@/components/shadcn/card";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <ShadcnCard className="w-full flex flex-col items-center justify-center gap-4 p-4 bg-white shadow-md rounded-lg">
      <CardContent className="flex flex-col items-center justify-center gap-4 relative h-[300px]">
        {children}
      </CardContent>
    </ShadcnCard>
  );
};
