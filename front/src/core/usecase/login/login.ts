import {
  UserValidation,
  UserValidationMethods,
} from "@/core/domain/users/model";

type ObjectsKeyExclude<T extends object, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};
type LoginUseCase = {
  loginValidation: () => ObjectsKeyExclude<UserValidationMethods, "isUserID">;
  loginFetch: () => void;
};

const loginValidation = (): ObjectsKeyExclude<
  UserValidationMethods,
  "isUserID"
> => {
  return {
    isUserName: UserValidation.isUserName,
    isPassword: UserValidation.isPassword,
  };
};

const loginFetch = () => {};

export const LoginUseCase: LoginUseCase = {
  loginValidation,
  loginFetch,
};
