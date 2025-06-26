import { ILoginUseCase, FormType } from "@/core/usecase/login";
import { FormikErrors } from "formik";

export const useLoginController = (useCase: ILoginUseCase) => {
  const loginValidation = useCase.loginValidation();
  const fetcher = useCase.login;

  const validate = (values: FormType) => {
    const errors: FormikErrors<FormType> = {};
    const userNameError = loginValidation.userNameValidation(values.name);
    const passwordError = loginValidation.passwordValidation(values.password);
    if (userNameError) {
      errors.name = userNameError;
    }
    if (passwordError) {
      errors.password = passwordError;
    }
    return errors;
  };

  return { validate, fetcher };
};
