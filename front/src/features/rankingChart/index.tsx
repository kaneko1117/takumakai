"use client";
import React from "react";
import dynamic from "next/dynamic";
import { RankingChartProps } from "./type";
import { Card } from "./components/card";

const data: RankingChartProps[] = [
  {
    subject: "ラス回避率",
    per: 0.9,
  },
  {
    subject: "連対率",
    per: 0.63,
  },
  {
    subject: "トップ率",
    per: 0.33,
  },
];
const DynamicChart = dynamic(() => import("./components/chart"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
export const RankingChart = () => {
  return (
    <>
      <Card>
        <div className="absolute top-8">
          <DynamicChart data={data} />
        </div>
      </Card>
    </>
  );
};
