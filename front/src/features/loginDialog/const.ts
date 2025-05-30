import * as Yup from "yup";

export const LOGIN_SCHEMA = Yup.object().shape({
  name: Yup.string().required("名前は必須です"),
  password: Yup.string()
    .required("パスワードは必須です")
    .min(6, "パスワードは6文字以上で入力してください"),
});
