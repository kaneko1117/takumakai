import { User, UserMethods, UserMethodsType } from "@/core/entity/users/model";
import { ObjectsKeyExtract } from "../_helper/type";

type ToArray<T extends object> = {
  [K in keyof T]: T[K][];
};

export type RegisterPlayersType = ToArray<Pick<User, "id">>;

type RegisterPlayersValidation = ObjectsKeyExtract<
  UserMethodsType,
  "userIDValidation"
>;

export interface IRegisterPlayersUseCase {
  registerPlayersValidation: () => RegisterPlayersValidation;
  registerPlayers: (data: RegisterPlayersType) => Promise<void>;
  getPlayers: () => Promise<RegisterPlayersType>;
}

export interface IRegisterRepository {
  registerPlayers: (data: RegisterPlayersType) => Promise<void>;
  getPlayers: () => Promise<RegisterPlayersType>;
}

const registerPlayerValidation = (): RegisterPlayersValidation => {
  return {
    userIDValidation: UserMethods.userIDValidation,
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
