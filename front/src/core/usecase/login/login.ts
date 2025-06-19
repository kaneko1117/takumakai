import {
  User,
  UserValidation,
  UserValidationMethods,
} from "@/core/entity/users/model";

type ObjectsKeyExclude<T extends object, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

type LoginValidation = ObjectsKeyExclude<
  UserValidationMethods,
  "userIDValidation"
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
