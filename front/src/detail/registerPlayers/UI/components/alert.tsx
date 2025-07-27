import {
  Alert as ShadcnAlert,
  AlertDescription,
} from "@/components/shadcn/alert";

export const Alert = () => {
  return (
    <ShadcnAlert variant="default">
      <AlertDescription className="text-sm">
        参加者を４人選択してください。
      </AlertDescription>
    </ShadcnAlert>
  );
};
