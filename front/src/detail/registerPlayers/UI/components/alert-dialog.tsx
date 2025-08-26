import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog as ShadcnAlertDialog,
} from "@/components/shadcn/alert-dialog";
import { Button } from "@/components/shadcn/button";
import {
  AlertDialogAction,
  AlertDialogCancel,
} from "@radix-ui/react-alert-dialog";

type Props = {
  isSubmitting: boolean;
  isDisabled: boolean;
  onConfirm: () => void;
  names: string[];
};

export const AlertDialog = ({
  isSubmitting,
  isDisabled,
  onConfirm,
  names,
}: Props) => {
  return (
    <ShadcnAlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={isDisabled}
          className="btn btn-primary mt-5 font-bold"
          type="button"
        >
          登録
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>参加者を確定しますか？</AlertDialogTitle>

          <AlertDialogDescription>
            {names.map((name, index) => (
              <span key={index}>
                {name}
                {index < names.length - 1 && <br />}
              </span>
            ))}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <Button variant="outline">いいえ</Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button disabled={isSubmitting} onClick={onConfirm}>
              はい
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadcnAlertDialog>
  );
};
