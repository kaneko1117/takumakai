"use client";
import React from "react";
import dynamic from "next/dynamic";
import { RankingChartType } from "./type";
import { Card } from "./components/card";



type Props = {
  data: RankingChartType[];
}

const DynamicChart = dynamic(() => import("./components/chart"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
export const RankingChart = ({data}:Props) => {
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
