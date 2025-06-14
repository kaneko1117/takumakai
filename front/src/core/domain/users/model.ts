import {
  Password,
  UserID,
  UserName,
  isUserID,
  isPassword,
  isUserName,
} from "./value.objects";

// Userのドメインモデル
// Userに関する型定義はこれを元に行う
export type User = {
  id: UserID;
  name: UserName;
  password: Password;
  imageUrl: string;
  department: string;
};

export type UserValidationMethods = {
  isUserID: (id: string) => boolean;
  isUserName: (name: string) => boolean;
  isPassword: (password: string) => boolean;
};

export const UserValidation: UserValidationMethods = {
  isUserID,
  isUserName,
  isPassword,
};
