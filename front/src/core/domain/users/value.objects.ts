import { Brand, newBrand } from "../brand";

const NAME_REGEX = /^[ぁ-ゖゝゞァ-ヷー一-龥丑-響々﨑㟢]+$/;

export type UserID = Brand<string, "UserID">;
export const newUserID = (id: string): UserID => {
  return newBrand<string, "UserID">(id);
};
export const isUserID = (id: string): boolean => {
  if (!id) {
    return false;
  }
  return true;
};

export type UserName = Brand<string, "UserName">;
export const newUserName = (name: string): UserName => {
  return newBrand<string, "UserName">(name);
};
export const isUserName = (name: string): boolean => {
  if (!name) {
    return false;
  }
  if (!NAME_REGEX.test(name)) {
    return false;
  }
  return true;
};

export type Password = Brand<string, "Password">;
export const newPassword = (password: string): Password => {
  return newBrand<string, "Password">(password);
};
export const isPassword = (password: string): boolean => {
  if (!password) {
    return false;
  }
  if (password.length < 6) {
    return false;
  }
  return true;
};
