"use client";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Tooltip,
} from "recharts";
import { RankingChartProps } from "../type";

type Props = {
  data: RankingChartProps[];
};

export default function Chart({ data }: Props) {
  return (
    <RadarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 20,
        bottom: 5,
      }}
    >
      <Tooltip />
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={90} domain={[0, 1]} fontSize={10} />
      <Radar dataKey="per" stroke="#00c950" fill="#00c950" fillOpacity={0.4} />
    </RadarChart>
  );
}
