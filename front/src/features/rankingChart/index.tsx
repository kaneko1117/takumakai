"use client";
import React from "react";
import dynamic from "next/dynamic";
import { RankingChartProps } from "./type";

const data: RankingChartProps[] = [
  {
    subject: "トップ率",
    per: 0.33,
  },
  {
    subject: "連対率",
    per: 0.63,
  },
  {
    subject: "ラス回避率",
    per: 0.9,
  },
];
const DynamicChart = dynamic(() => import("./components/chart"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
export const RankingChart = () => {
  return <DynamicChart data={data} />;
};
