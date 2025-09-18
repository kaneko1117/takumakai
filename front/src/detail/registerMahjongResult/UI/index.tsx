"use client";

import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/shadcn/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { Input } from "@/components/shadcn/input";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog as ShadcnAlertDialog,
} from "@/components/shadcn/alert-dialog";
import {
  Alert as ShadcnAlert,
  AlertDescription,
} from "@/components/shadcn/alert";
import { Button } from "@/components/shadcn/button";
import {
  MahjongResultTypes,
  registerMahjongResultUseCase,
} from "@/core/usecase/registerMahjongResult";
import { registerMahjongResultRepository } from "../repository";
import { useRegisterMahjongResult } from "../hooks/useRegisterMahjongResult";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/shadcn/checkbox";
import { Label } from "@/components/shadcn/label";
import { Fragment } from "react";

type Props = {
  data: MahjongResultTypes;
};

const inputVariants = cva("text-right w-50 h-10", {
  variants: {
    isTobi: {
      true: "text-red-500",
    },
  },
});

const labelValiants = cva("", {
  variants: {
    isTobashi: {
      true: "text-primary font-bold",
    },
    isDisabled: {
      true: "text-gray/50",
    },
  },
});

export const RegisterMahjongResult = ({ data }: Props) => {
  const repo = registerMahjongResultRepository;
  const useCase = registerMahjongResultUseCase(repo);
  const {
    onChange,
    onClick,
    selectFormValue,
    isTobashiView,
    isTobashiDisable,
    error,
    formValue,
  } = useRegisterMahjongResult(useCase);
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Calculator className="w-6 h-6 text-primary" />
          <h2 className="font-bold">スコア入力</h2>
        </div>
      </CardHeader>
      <CardContent>
        {data.map((player) => (
          <div className="flex flex-col gap-2 py-4" key={player.userId}>
            <div className="flex gap-2 items-center">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p>{player.userName}</p>
            </div>
            <div className="flex justify-between">
              <Input
                type="number"
                placeholder="25,000"
                className={cn(
                  inputVariants({
                    isTobi: selectFormValue(player.userId).isTobi,
                  })
                )}
                value={selectFormValue(player.userId).score}
                onChange={(e) =>
                  onChange(
                    Number(e.target.value),
                    player.userId,
                    player.userName
                  )
                }
              />
              {isTobashiView(player.userId) && (
                <Label>
                  <Checkbox
                    checked={selectFormValue(player.userId).isTobashi}
                    onCheckedChange={(checked) =>
                      onClick(!!checked, player.userId, player.userName)
                    }
                    disabled={isTobashiDisable(player.userId)}
                  />
                  <p
                    className={labelValiants({
                      isTobashi: selectFormValue(player.userId).isTobashi,
                      isDisabled: isTobashiDisable(player.userId),
                    })}
                  >
                    飛ばしボーナス
                  </p>
                </Label>
              )}
            </div>
          </div>
        ))}
        <ShadcnAlert
          variant="default"
          className="mt-10 bg-primary/10 border-none"
        >
          <AlertDescription className="text-sm">
            <li>{error ? <>{error}</> : "スコアを確認して登録してください"}</li>
          </AlertDescription>
        </ShadcnAlert>
        <ShadcnAlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="btn btn-primary mt-4 font-bold w-full"
              type="button"
              disabled={!!error}
            >
              登録
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>このスコアで登録しますか？</AlertDialogTitle>
              <AlertDialogDescription>
                {formValue.map((player) => (
                  <Fragment key={player.userId}>
                    <p className="pt-2">{player.userName}</p>
                    <p>スコア: {player.score}</p>
                  </Fragment>
                ))}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel asChild>
                <Button variant="outline">いいえ</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button>はい</Button>
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </ShadcnAlertDialog>
      </CardContent>
    </Card>
  );
};
