import {
  IRegisterMahjongResultUseCase,
  MahjongResultTypes,
} from "@/core/usecase/registerMahjongResult";
import { useState } from "react";

export const useRegisterMahjongResult = (
  usecase: IRegisterMahjongResultUseCase
) => {
  const registerMahjongResults = async (
    data: MahjongResultTypes,
    gameId: string,
    hanshuangId: string
  ) => {
    await usecase.registerMahjongResults(data, gameId, hanshuangId);
  };

  const [formValue, setFormValue] = useState<MahjongResultTypes>([]);

  const regoisterMahojongMethods = usecase.registerMahjongMethods();

  const onChange = (score: number, userId: string, userName: string) => {
    const isTobi = regoisterMahojongMethods.isTobiChecker(score);

    setFormValue((prev) => {
      const existing = prev.find((item) => item.userId === userId);
      if (existing) {
        if (isTobi) {
          return prev.map((item) =>
            item.userId === userId
              ? { ...item, score, isTobi, isTobashi: false }
              : item
          );
        }
        return prev.map((item) =>
          item.userId === userId ? { ...item, score, isTobi } : item
        );
      }
      return [...prev, { score, userId, userName, isTobi, isTobashi: false }];
    });
  };

  const onClick = (isTobashi: boolean, userId: string, userName: string) => {
    setFormValue((prev) => {
      const existing = prev.find((item) => item.userId === userId);
      if (existing) {
        return prev.map((item) =>
          item.userId === userId ? { ...item, isTobashi } : item
        );
      }
      return [
        ...prev,
        { userId, userName, isTobashi, isTobi: false, score: 0 },
      ];
    });
  };

  const selectFormValue = (userId: string) => {
    return (
      formValue.find((item) => item.userId === userId) ?? {
        userId,
        userName: "",
        isTobi: false,
        isTobashi: false,
        score: 0,
      }
    );
  };

  const error = regoisterMahojongMethods.mahjongResultsValidation(formValue);

  const isTobashiView = (userId: string): boolean => {
    const isTobiExists = formValue.some((item) => item.isTobi);
    if (!isTobiExists) return false;
    const isTobi = selectFormValue(userId).isTobi;
    return !isTobi;
  };

  console.log("formValue:", formValue);

  return {
    registerMahjongResults,
    onChange,
    onClick,
    selectFormValue,
    isTobashiView,
    error,
    formValue,
  };
};
