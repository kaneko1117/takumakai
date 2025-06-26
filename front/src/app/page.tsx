import { PlayStyleServer } from "@/detail/mahjongPlayStyle/UI/server";
import { TopPerformance } from "@/detail/topMahjongPerformance/controller/UI/server";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="grid grid-cols-2 gap-2 w-full">
        <TopPerformance />
      </div>
      <PlayStyleServer />
    </div>
  );
}
