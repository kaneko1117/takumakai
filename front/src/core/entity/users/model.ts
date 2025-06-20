import {
  passwordValidation,
  userIDValidation,
  userNameValidation,
  departmentValidation,
} from "./service";

// Userのドメインモデル
// Userに関する型定義はこれを元に行う
export type User = {
  id: string;
  name: string;
  password: string;
  imageUrl: string;
  department: string;
};

export type UserValidationMethods = {
  userIDValidation: (id: string) => string;
  userNameValidation: (name: string) => string;
  passwordValidation: (password: string) => string;
  departmentValidation: (department: string) => string;
};

export const UserValidation: UserValidationMethods = {
  userIDValidation,
  userNameValidation,
  passwordValidation,
  departmentValidation,
};
