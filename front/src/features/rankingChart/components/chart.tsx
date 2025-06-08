"use client";
import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Tooltip,
} from "recharts";
import { RankingChartType } from "../type";

type Props = {
  data: RankingChartType[];
};

export default function Chart({ data }: Props) {
  return (
    <RadarChart width={350} height={300} data={data}>
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
