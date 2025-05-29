import {
  Dialog as DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title: string;
};

export const Dialog = ({ children, title }: Props) => {
  return (
    <DialogRoot>
      <DialogTrigger className="bg-primary text-white font-bold py-1 px-3 rounded-sm shadow-sm cursor-pointer">
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
