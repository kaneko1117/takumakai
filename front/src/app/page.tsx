import { RankingCard } from "@/features/rankingCard/rankingCard";
import { RankingCardProps } from "@/features/rankingCard/type";
import { RankingChart } from "@/features/rankingChart";

const TEST_DATA: RankingCardProps[] = [
  {
    name: "琢磨さん",
    imageUrl: "https://github.com/shadcn.png",
    type: "平均ポイント",
    value: 123,
  },
  {
    name: "琢磨さん",
    imageUrl: "https://github.com/shadcn.png",
    type: "平均順位",
    value: 2.23,
  },
  {
    name: "琢磨さん",
    imageUrl: "https://github.com/shadcn.png",
    type: "ベストスコア",
    value: 85000,
  },
  {
    name: "琢磨さん",
    imageUrl: "https://github.com/shadcn.png",
    type: "平均スコア",
    value: 32000,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-2 gap-2 w-full">
        {TEST_DATA.map((data, index) => (
          <RankingCard key={index} data={data} />
        ))}
      </div>
      <RankingChart />
    </div>
  );
}
