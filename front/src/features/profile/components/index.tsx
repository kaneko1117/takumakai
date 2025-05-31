import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { Card, CardContent } from "@/components/shadcn/card";
import { ProfileType } from "../type";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type Props = {
  data: ProfileType;
  variant: "member" | "detail";
};

const cardContentVariants = cva("flex items-center justify-left", {
  variants: {
    variant: {
      member: "gap-2 px-0",
      detail: "gap-5",
    },
  },
});

const cardVariants = cva("w-full p-2", {
  variants: {
    variant: {
      member: "border-none shadow-none",
      detail: "py-5",
    },
  },
});

const avatarVariants = cva("", {
  variants: {
    variant: {
      member: "w-15 h-15",
      detail: "w-20 h-20",
    },
  },
});

const nameVariants = cva("", {
  variants: {
    variant: {
      member: "text-mb",
      detail: "text-xl font-bold",
    },
  },
});

const departmentVariants = cva("", {
  variants: {
    variant: {
      member: "text-gray-500 text-sm",
      detail: "text-[12px] font-bold px-2 py-1 rounded-md border",
    },
  },
});

export const Profile = ({ data, variant }: Props) => {
  return (
    <Card className={cn(cardVariants({ variant }))}>
      <CardContent className={cn(cardContentVariants({ variant }))}>
        <Avatar className={cn(avatarVariants({ variant }))}>
          <AvatarImage
            src={data.imageUrl}
            className={cn(avatarVariants({ variant }))}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1">
          <h3 className={cn(nameVariants({ variant }))}>{data.name}</h3>
          <p className={cn(departmentVariants({ variant }))}>
            {data.department}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
