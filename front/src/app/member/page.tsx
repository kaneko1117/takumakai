import { Profile } from "@/detail/profile/controller/UI/pages/member";
import { Signup } from "@/detail/signup/controller/UI";

export default function Member() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">会員一覧</h2>
        <Signup />
      </div>
      <Profile />
    </div>
  );
}
