import { TopPerformance } from "@/detail/topMahjongPerformance/controller/UI/server";
import { RankingChart } from "@/features/rankingChart";
import { RankingChartType } from "@/features/rankingChart/type";

const RANKING_TEST_DATA: RankingChartType[] = [
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

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-2 gap-2 w-full">
        <TopPerformance />
      </div>
      <RankingChart data={RANKING_TEST_DATA} />
    </div>
  );
}
