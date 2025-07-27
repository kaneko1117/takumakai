const NAME_REGEX = /^[ぁ-ゖゝゞァ-ヷー一-龥丑-響々﨑㟢]+$/;

export const userIDValidation = (id: string): string => {
  if (!id) {
    return "IDは必須です";
  }
  return "";
};

export const registerPlayersValidation = (ids: string[]): string => {
  if (ids.length !== 4) {
    return "4人のプレイヤーを選択してください";
  }
  return "";
};

export const userNameValidation = (name: string): string => {
  if (!name) {
    return "名前は必須です";
  }
  if (!NAME_REGEX.test(name)) {
    return "名前は全角文字で入力してください";
  }
  return "";
};

export const passwordValidation = (password: string): string => {
  if (!password) {
    return "パスワードは必須です";
  }
  if (password.length < 6) {
    return "パスワードは6文字以上で入力してください";
  }
  return "";
};

export const departmentValidation = (department: string): string => {
  if (!department) {
    return "部署は必須です";
  }
  if (department.length > 20) {
    return "部署は20文字以内で入力してください";
  }
  return "";
};
