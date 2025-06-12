import { Brand, newBrand } from "../brand";

const NAME_REGEX = /^[ぁ-ゖゝゞァ-ヷー一-龥丑-響々﨑㟢]+$/;

export type UserID = Brand<string, "UserID">;

export const newUserID = (id: string): UserID | Error => {
  if (!id) {
    return new Error("UserID cannot be empty");
  }
  return newBrand<string, "UserID">(id);
};

export type UserName = Brand<string, "UserName">;
export const newUserName = (name: string): UserName | Error => {
  if (!name) {
    return new Error("UserName cannot be empty");
  }
  if (!NAME_REGEX.test(name)) {
    return new Error("UserName must be in Japanese characters");
  }
  return newBrand<string, "UserName">(name);
};
