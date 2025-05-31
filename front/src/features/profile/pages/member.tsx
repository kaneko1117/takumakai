import { Profile as RootProfile } from "../components";
import { ProfileType } from "../type";

const TEST_DATA: ProfileType[] = [
  {
    id: 1,
    name: "琢磨さん",
    imageUrl: "https://github.com/shadcn.png",
    department: "営業推進部",
  },
  {
    id: 2,
    name: "ayumu",
    imageUrl: "https://github.com/shadcn.png",
    department: "センター",
  },
  {
    id: 3,
    name: "松本補佐",
    imageUrl: "https://github.com/shadcn.png",
    department: "人事部",
  },
  {
    id: 4,
    name: "南里くん",
    imageUrl: "https://github.com/shadcn.png",
    department: "営業推進部",
  },
];

export const Profile = () => {
  return TEST_DATA.map((data, index) => (
    <RootProfile key={index} data={data} variant="member" />
  ));
};
