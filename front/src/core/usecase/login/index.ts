import {
  User,
  UserValidation,
  UserValidationMethods,
} from "@/core/entity/users/model";
import { ObjectsKeyExtract } from "../_helper/type";

type LoginValidation = ObjectsKeyExtract<
  UserValidationMethods,
  "userNameValidation" | "passwordValidation"
>;

export type FormType = Pick<User, "name" | "password">;

// UseCaseの型定義
export interface ILoginUseCase {
  loginValidation: () => LoginValidation;
  login: (data: FormType) => Promise<void>;
}

export interface ILoginRepository {
  login: (data: FormType) => Promise<void>;
}

const loginValidation = (): LoginValidation => {
  return {
    userNameValidation: UserValidation.userNameValidation,
    passwordValidation: UserValidation.passwordValidation,
  };
};

export const loginUseCase = (repo: ILoginRepository): ILoginUseCase => {
  return {
    loginValidation: loginValidation,
    login: repo.login,
  };
};
