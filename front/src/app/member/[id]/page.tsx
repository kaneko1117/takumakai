import { Tabs } from "@/components/common/tabs";
import { Profile } from "@/detail/profile/controller/UI/pages/detailMember";
import { Performance } from "@/detail/mahjongPerformance/UI/server";
import { PlayStyleServer } from "@/detail/mahjongPlayStyle/UI/server";
import { RecentGamesServer } from "@/detail/recentGames/UI/server";

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
            <PlayStyleServer />
          </div>
        }
        recentGames={
          <div className="flex flex-col items-center justify-center gap-2">
            <RecentGamesServer />
          </div>
        }
      />
    </div>
  );
}
