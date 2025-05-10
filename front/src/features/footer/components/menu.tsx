"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
import { Crown, Zap, Users } from "lucide-react";
import { Separator } from "@/components/shadcn/separator";
import { cn } from "@/lib/utils";

export const Menu = () => {
  const pathname = usePathname();
  const linkVariant = cva(
    "py-1 px-2 flex flex-col justify-center items-center",
    {
      variants: {
        isActive: {
          true: "text-primary font-bold bg-primary/10 rounded-md",
        },
      },
    }
  );
  return (
    <div className="w-full">
      <Separator className="w-full mb-2" />
      <div className="w-full h-15 flex  items-center justify-around text-sm">
        <Link
          href="/"
          className={cn(linkVariant({ isActive: pathname === "/" }))}
        >
          <Crown className="mb-1" />
          ランキング
        </Link>
        <Separator orientation="vertical" />
        {/* ページを作ったらLinkにする*/}
        <div className={cn(linkVariant({ isActive: false }))}>
          <Zap className="mb-1" />
          対局
        </div>
        <Separator orientation="vertical" />
        <div className={cn(linkVariant({ isActive: false }))}>
          <Users className="mb-1" />
          ユーザー一覧
        </div>
      </div>
      <Separator className="w-full mt-2" />
    </div>
  );
};
