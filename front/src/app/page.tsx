import { RankingCard } from "@/features/rankingCard";
import { RankingCardType } from "@/features/rankingCard/type";
import { RankingChart } from "@/features/rankingChart";

const TEST_DATA: RankingCardType[] = [
  {
    name: "琢磨さん",
    imageUrl: "https://github.com/shadcn.png",
    type: "averagePoints",
    value: 123,
  },
  {
    name: "琢磨さん",
    imageUrl: "https://github.com/shadcn.png",
    type: "averagePlace",
    value: 2.23,
  },
  {
    name: "琢磨さん",
    imageUrl: "https://github.com/shadcn.png",
    type: "bestScore",
    value: 85000,
  },
  {
    name: "琢磨さん",
    imageUrl: "https://github.com/shadcn.png",
    type: "averageScore",
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
