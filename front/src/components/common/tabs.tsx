import { ReactNode } from "react";
import {
  Tabs as RootTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../shadcn/tabs";

type Props = {
  results: ReactNode;
  analysis: ReactNode;
  recentGames: ReactNode;
};

export const Tabs = ({ results, analysis, recentGames }: Props) => {
  return (
    <RootTabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="results">成績</TabsTrigger>
        <TabsTrigger value="analysis">分析</TabsTrigger>
        <TabsTrigger value="recentGames">最近の対局</TabsTrigger>
      </TabsList>
      <TabsContent value="results">{results}</TabsContent>
      <TabsContent value="analysis">{analysis}</TabsContent>
      <TabsContent value="recentGames">{recentGames}</TabsContent>
    </RootTabs>
  );
};
