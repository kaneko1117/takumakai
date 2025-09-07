import { User, UserMethods, UserMethodsType } from "@/core/entity/users/model";
import { ObjectsKeyExtract } from "../_helper/type";

type ToArray<T extends object> = {
  [K in keyof T]: T[K][];
};

export type RegisterPlayersType = ToArray<Pick<User, "id">>;
export type GetPlayersType = Pick<User, "id" | "name">[];

type RegisterPlayersValidation = ObjectsKeyExtract<
  UserMethodsType,
  "registerPlayersValidation"
>;

export interface IRegisterRepository {
  registerPlayers: (data: RegisterPlayersType) => Promise<void>;
  getPlayers: () => Promise<GetPlayersType>;
}

export interface IRegisterPlayersUseCase extends IRegisterRepository {
  registerPlayersValidation: () => RegisterPlayersValidation;
}

const registerPlayerValidation = (): RegisterPlayersValidation => {
  return {
    registerPlayersValidation: UserMethods.registerPlayersValidation,
  };
};

export const registerPlayersUseCase = (
  repo: IRegisterRepository
): IRegisterPlayersUseCase => {
  return {
    registerPlayersValidation: registerPlayerValidation,
    registerPlayers: repo.registerPlayers,
    getPlayers: repo.getPlayers,
  };
};
