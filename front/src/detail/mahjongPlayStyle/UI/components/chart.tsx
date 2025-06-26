import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
} from "recharts";

import {
  IMahjongPlayStyleUseCase,
  MahjongPlayStyleType,
} from "@/core/usecase/mahjongPlayStyle";
import { useMahjongPlayStyleController } from "../../controller/hooks/useMahjongPlayStyleController";

type Props = {
  data: MahjongPlayStyleType[];
  useCase: IMahjongPlayStyleUseCase;
};

export default function Chart({ data, useCase }: Props) {
  const { formattedData } = useMahjongPlayStyleController(useCase, data);
  return (
    <RadarChart width={350} height={300} data={formattedData}>
      <Tooltip />
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Radar
        dataKey="percentage"
        stroke="#00c950"
        fill="#00c950"
        fillOpacity={0.4}
      />
    </RadarChart>
  );
}
