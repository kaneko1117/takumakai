import { User, UserMethods, UserMethodsType } from "@/core/entity/users/model";
import { ObjectsKeyExtract } from "../_helper/type";

type LoginValidation = ObjectsKeyExtract<
  UserMethodsType,
  "userNameValidation" | "passwordValidation"
>;

export type FormType = Pick<User, "name" | "password">;

export interface ILoginRepository {
  login: (data: FormType) => Promise<void>;
}
// UseCaseの型定義
export interface ILoginUseCase extends ILoginRepository {
  loginValidation: () => LoginValidation;
}

const loginValidation = (): LoginValidation => {
  return {
    userNameValidation: UserMethods.userNameValidation,
    passwordValidation: UserMethods.passwordValidation,
  };
};

export const loginUseCase = (repo: ILoginRepository): ILoginUseCase => {
  return {
    loginValidation: loginValidation,
    login: repo.login,
  };
};
