import {
  Dialog as DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
  variant: "register" | "login";
};

const dialogVariants = cva(
  "py-2 px-4 rounded-sm shadow-sm cursor-pointer font-bold",
  {
    variants: {
      variant: {
        register: "bg-primary text-white",
        login: "bg-white border border-secondary w-[120px] text-primary",
      },
    },
  }
);

export const Dialog = ({ children, title, variant }: Props) => {
  return (
    <DialogRoot>
      <DialogTrigger className={cn(dialogVariants({ variant }))}>
        {title}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </DialogRoot>
  );
};
