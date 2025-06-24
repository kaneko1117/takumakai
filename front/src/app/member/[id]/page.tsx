import { Tabs } from "@/components/common/tabs";
import { DetailCardType } from "@/features/detailCard/type";
import { Profile } from "@/detail/profile/controller/UI/pages/detailMember";
import { RankingChart } from "@/features/rankingChart";
import { RankingChartType } from "@/features/rankingChart/type";
import { Performance } from "@/detail/mahjongPerformance/UI/server";

type DataType = {
  results: DetailCardType[];
  analysis: RankingChartType[];
};

const TEST_DATA: DataType = {
  results: [
    {
      type: "averagePoints",
      value: 12,
    },
    {
      type: "averagePlace",
      value: 2.51,
    },
    {
      type: "bestScore",
      value: 56000,
    },
    {
      type: "averageScore",
      value: 32000,
    },
  ],
  analysis: [
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
  ],
};

export default function MemberDetail() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Profile />
      <Tabs
        results={
          <div className="grid grid-cols-2 gap-2 w-full">
            <Performance />
          </div>
        }
        analysis={
          <div className="flex flex-col items-center justify-center gap-2">
            <RankingChart data={TEST_DATA.analysis} />
          </div>
        }
        recentGames={
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-lg font-bold">最近のゲーム</p>
            <p className="text-gray">最近のゲームは近日公開予定です。</p>
          </div>
        }
      />
    </div>
  );
}
