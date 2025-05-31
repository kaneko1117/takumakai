import { Profile as RootProfile } from "../components";
import { ProfileType } from "../type";

const TEST_DATA: ProfileType = {
  id: 1,
  name: "琢磨さん",
  imageUrl: "https://github.com/shadcn.png",
  department: "営業推進部",
};

export const Profile = () => {
  return <RootProfile data={TEST_DATA} variant="detail" />;
};
