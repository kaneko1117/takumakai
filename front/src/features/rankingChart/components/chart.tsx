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
import { RankingChartType } from "../type";

type Props = {
  data: RankingChartType[];
};

export default function Chart({ data }: Props) {
  return (
    <RadarChart width={400} height={300} data={data}>
      <Tooltip />
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={90} domain={[0, 1]} fontSize={10} />
      <Radar
        dataKey="percentage"
        stroke="#00c950"
        fill="#00c950"
        fillOpacity={0.4}
      />
    </RadarChart>
  );
}
