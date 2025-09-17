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
  const onChange = (score: number, userId: string, userName: string) => {
    setFormValue((prev) => {
      const existing = prev.find((item) => item.userId === userId);
      if (existing) {
        return prev.map((item) =>
          item.userId === userId ? { ...item, score } : item
        );
      }
      return [...prev, { score, userId, userName, isTobi: false }];
    });
  };

  const registerMahjongResultsValidation = usecase.registerMahjongMethods();

  const error =
    registerMahjongResultsValidation.mahjongResultsValidation(formValue);

  console.log("formValue", formValue);
  console.log("error", error);

  return {
    registerMahjongResults,
    onChange,
    error,
    formValue,
  };
};
