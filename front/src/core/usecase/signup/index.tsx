import {
  User,
  UserValidation,
  UserValidationMethods,
} from "@/core/entity/users/model";
import { ObjectsKeyExtract } from "../_helper/type";

type SignupValidation = ObjectsKeyExtract<
  UserValidationMethods,
  "userNameValidation" | "passwordValidation" | "departmentValidation"
>;

export type FormType = Pick<User, "name" | "password" | "department">;

export interface ISignupUseCase {
  signupValidation: () => SignupValidation;
  signup: (data: FormType) => Promise<void>;
}

export interface ISignupRepository {
  signup: (data: FormType) => Promise<void>;
}

const signupValidation = (): SignupValidation => {
  return {
    userNameValidation: UserValidation.userNameValidation,
    passwordValidation: UserValidation.passwordValidation,
    departmentValidation: UserValidation.departmentValidation,
  };
};

export const signupUseCase = (repo: ISignupRepository): ISignupUseCase => {
  return {
    signupValidation: signupValidation,
    signup: repo.signup,
  };
};
