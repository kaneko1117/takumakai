import {
  passwordValidation,
  userIDValidation,
  userNameValidation,
  departmentValidation,
  registerPlayersValidation,
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

export type UserMethodsType = {
  userIDValidation: (id: string) => string;
  userNameValidation: (name: string) => string;
  passwordValidation: (password: string) => string;
  departmentValidation: (department: string) => string;
  registerPlayersValidation: (ids: string[]) => string;
};

export const UserMethods: UserMethodsType = {
  userIDValidation,
  userNameValidation,
  passwordValidation,
  departmentValidation,
  registerPlayersValidation,
};
