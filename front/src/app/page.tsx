import { RankingCard } from "@/features/rankingCard/rankingCard";

export default function Home() {
  return (
    <div className="flex items-center justify-center gap-2">
      <RankingCard />
      <RankingCard />
    </div>
  );
}
