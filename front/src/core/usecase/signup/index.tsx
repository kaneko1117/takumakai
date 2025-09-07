import { User, UserMethods, UserMethodsType } from "@/core/entity/users/model";
import { ObjectsKeyExtract } from "../_helper/type";

type SignupValidation = ObjectsKeyExtract<
  UserMethodsType,
  "userNameValidation" | "passwordValidation" | "departmentValidation"
>;

export type FormType = Pick<User, "name" | "password" | "department">;

export interface ISignupRepository {
  signup: (data: FormType) => Promise<void>;
}

export interface ISignupUseCase extends ISignupRepository {
  signupValidation: () => SignupValidation;
}

const signupValidation = (): SignupValidation => {
  return {
    userNameValidation: UserMethods.userNameValidation,
    passwordValidation: UserMethods.passwordValidation,
    departmentValidation: UserMethods.departmentValidation,
  };
};

export const signupUseCase = (repo: ISignupRepository): ISignupUseCase => {
  return {
    signupValidation: signupValidation,
    signup: repo.signup,
  };
};
