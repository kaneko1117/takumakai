import {
  MahjongPlayStyle,
  MahjongPlayStyleMethodsType,
  MahjongPlayStyleMethods,
} from "@/core/entity/mahjongStatus/model";

export type MahjongPlayStyleType = Pick<
  MahjongPlayStyle,
  "subject" | "percentage"
>;

export interface IMahjongPlayStyleRepository {
  getMahjongPlayStyle: () => Promise<MahjongPlayStyleType[]>;
}

export interface IMahjongPlayStyleUseCase extends IMahjongPlayStyleRepository {
  mahjongPlayStyleMethods: MahjongPlayStyleMethodsType;
}

export const mahjongPlayStyleUseCase = (
  repo: IMahjongPlayStyleRepository
): IMahjongPlayStyleUseCase => {
  return {
    mahjongPlayStyleMethods: MahjongPlayStyleMethods,
    getMahjongPlayStyle: repo.getMahjongPlayStyle,
  };
};
