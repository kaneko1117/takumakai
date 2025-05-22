import { MemberCard } from "@/features/memberCard";
import { MemberCardType } from "@/features/memberCard/type";
import { RegisterButton } from "@/features/registerButton";

const TEST_DATA: MemberCardType[] = [
  {
    name: "琢磨さん",
    imageUrl: "https://github.com/shadcn.png",
    department: "営業推進部",
  },
  {
    name: "ayumu",
    imageUrl: "https://github.com/shadcn.png",
    department: "センター",
  },
  {
    name: "松本補佐",
    imageUrl: "https://github.com/shadcn.png",
    department: "人事部",
  },
  {
    name: "南里くん",
    imageUrl: "https://github.com/shadcn.png",
    department: "営業推進部",
  },
  {
    name: "金子",
    imageUrl: "https://github.com/shadcn.png",
    department: "デジタル推進部",
  },
  {
    name: "金子",
    imageUrl: "https://github.com/shadcn.png",
    department: "デジタル推進部",
  },
  {
    name: "金子",
    imageUrl: "https://github.com/shadcn.png",
    department: "デジタル推進部",
  },
  {
    name: "金子",
    imageUrl: "https://github.com/shadcn.png",
    department: "デジタル推進部",
  },
  {
    name: "金子",
    imageUrl: "https://github.com/shadcn.png",
    department: "デジタル推進部",
  },
  {
    name: "金子",
    imageUrl: "https://github.com/shadcn.png",
    department: "デジタル推進部",
  },
];

export default function Member() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">会員一覧</h2>
        <RegisterButton />
      </div>
      <div>
        {TEST_DATA.map((data, index) => (
          <MemberCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
