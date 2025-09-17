import {
  GameResultMethods,
  GameResultMethodsType,
  MahjongResult,
} from "@/core/entity/mahjongResult/model";

export type MahjongResultTypes = Omit<
  MahjongResult,
  "gameId" | "hanshuangId" | "id"
>[];

type RegisterMahjongResultValidation = GameResultMethodsType;

export interface IRegisterMahjongResultRepository {
  registerMahjongResults: (
    mahjongResults: MahjongResultTypes,
    gameId: string,
    hanshuangId: string
  ) => Promise<void>;
  getMahjongResults: (
    gameId: string,
    hanshuangIdID: string
  ) => Promise<MahjongResultTypes>;
}

export interface IRegisterMahjongResultUseCase
  extends IRegisterMahjongResultRepository {
  registerMahjongMethods: () => GameResultMethodsType;
}

const registerMahjongResultValidation = (): RegisterMahjongResultValidation => {
  return {
    ...GameResultMethods,
  };
};

export const registerMahjongResultUseCase = (
  repo: IRegisterMahjongResultRepository
): IRegisterMahjongResultUseCase => {
  return {
    ...repo,
    registerMahjongMethods: registerMahjongResultValidation,
  };
};
