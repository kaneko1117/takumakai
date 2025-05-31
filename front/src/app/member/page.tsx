import { Profile } from "@/features/profile/pages/member";
import { RegisterDialog } from "@/features/registerDialog";

export default function Member() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">会員一覧</h2>
        <RegisterDialog />
      </div>
      <Profile />
    </div>
  );
}
