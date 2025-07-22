import {
  IRegisterPlayersUseCase,
  RegisterPlayersType,
} from "@/core/usecase/registerPlayers";
import { FormikErrors } from "formik";

export const useRegisterPlayers = (usecase: IRegisterPlayersUseCase) => {
  const registerValidation = usecase.registerPlayersValidation();
  const fetcher = usecase.registerPlayers;

  const validate = (values: RegisterPlayersType) => {
    const errors: FormikErrors<RegisterPlayersType> = {};
    values.id.forEach((id) => {
      const userIDError = registerValidation.userIDValidation(id);
      if (userIDError) {
        errors.id = userIDError;
      }
    });
    return errors;
  };

  return { validate, fetcher };
};
