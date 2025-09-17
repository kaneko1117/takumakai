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
import { Button } from "@/components/shadcn/button";
import {
  MahjongResultTypes,
  registerMahjongResultUseCase,
} from "@/core/usecase/registerMahjongResult";
import { registerMahjongResultRepository } from "../repository";
import { useRegisterMahjongResult } from "../hooks/useRegisterMahjongResult";

type Props = {
  data: MahjongResultTypes;
};

export const RegisterMahjongResult = ({ data }: Props) => {
  const repo = registerMahjongResultRepository;
  const useCase = registerMahjongResultUseCase(repo);
  const { onChange, formValue } = useRegisterMahjongResult(useCase);
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
            <Input
              type="number"
              placeholder="25,000"
              className="text-right w-50 h-10"
              value={
                formValue.find((item) => item.userId === player.userId)
                  ?.score ?? ""
              }
              onChange={(e) =>
                onChange(Number(e.target.value), player.userId, player.userName)
              }
            />
          </div>
        ))}
        <ShadcnAlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="btn btn-primary mt-5 font-bold w-full"
              type="button"
            >
              登録
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>このスコアで登録しますか？</AlertDialogTitle>

              <AlertDialogDescription></AlertDialogDescription>
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
