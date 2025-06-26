import { ISignupUseCase, FormType } from "@/core/usecase/signup";
import { FormikErrors } from "formik";

export const useSignupController = (useCase: ISignupUseCase) => {
  const signupValidation = useCase.signupValidation();
  const fetcher = useCase.signup;

  const validate = (values: FormType) => {
    const errors: FormikErrors<FormType> = {};
    const userNameError = signupValidation.userNameValidation(values.name);
    const passwordError = signupValidation.passwordValidation(values.password);
    const departmentError = signupValidation.departmentValidation(
      values.department
    );

    if (userNameError) {
      errors.name = userNameError;
    }
    if (passwordError) {
      errors.password = passwordError;
    }
    if (departmentError) {
      errors.department = departmentError;
    }

    return errors;
  };
  return { validate, fetcher };
};
