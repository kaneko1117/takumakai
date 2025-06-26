"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Card } from "./components/card";
import {
  MahjongPlayStyleType,
  mahjongPlayStyleUseCase,
} from "@/core/usecase/mahjongPlayStyle";
import { mahjongPlayStyleRepository } from "../repository";

type Props = {
  data: MahjongPlayStyleType[];
};

const DynamicChart = dynamic(() => import("./components/chart"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});
export const PlayStyle = ({ data }: Props) => {
  // sever_componentからclient_componentへpropsを渡せるのはシリアライズ可能なデータのみなので、
  // 再度repositoryとuseCaseを定義している。やりたくはない。
  const repo = mahjongPlayStyleRepository;
  const useCase = mahjongPlayStyleUseCase(repo);
  return (
    <>
      <Card data={data} useCase={useCase}>
        <div className="absolute top-8">
          <DynamicChart data={data} useCase={useCase} />
        </div>
      </Card>
    </>
  );
};
