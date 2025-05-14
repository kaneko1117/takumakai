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

const data = [
  {
    subject: "トップ率",
    A: 0.33,
  },
  {
    subject: "連対率",
    A: 0.63,
  },
  {
    subject: "ラス回避率",
    A: 0.9,
  },
];

export const RankingChart = () => {
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
      <Radar dataKey="A" stroke="#00c950" fill="#00c950" fillOpacity={0.4} />
    </RadarChart>
  );
};
