import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";

export const RegisterDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="bg-primary text-white font-bold py-1 px-3 rounded-sm shadow-sm cursor-pointer">
        入会
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>入会</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
