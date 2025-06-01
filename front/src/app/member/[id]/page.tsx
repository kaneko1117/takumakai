import { Tabs } from "@/components/common/tabs";
import { DetailCard } from "@/features/detailCard";
import { DetailCardType } from "@/features/detailCard/type";
import { Profile } from "@/features/profile/pages/detailMember";

type DataType = {
  results: DetailCardType[];
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
};

export default function MemberDetail() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Profile />
      <Tabs
        results={
          <div className="grid grid-cols-2 gap-2 w-full">
            {TEST_DATA.results.map((data, index) => (
              <DetailCard key={index} data={data} />
            ))}
          </div>
        }
        analysis={
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-lg font-bold">分析結果</p>
            <p className="text-gray">詳細な分析は近日公開予定です。</p>
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
