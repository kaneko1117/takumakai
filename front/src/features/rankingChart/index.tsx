"use client";
import React from "react";
import dynamic from "next/dynamic";
import { RankingChartType } from "./type";
import { Card } from "./components/card";

const data: RankingChartType[] = [
  {
    subject: "ラス回避率",
    percentage: 0.9,
  },
  {
    subject: "連対率",
    percentage: 0.63,
  },
  {
    subject: "トップ率",
    percentage: 0.33,
  },
];
const DynamicChart = dynamic(() => import("./components/chart"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
export const RankingChart = () => {
  return (
    <>
      <Card data={data}>
        <div className="absolute top-8">
          <DynamicChart data={data} />
        </div>
      </Card>
    </>
  );
};
