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

    const validationError = registerValidation.registerPlayersValidation(
      values.id
    );
    if (validationError) {
      errors.id = validationError;
    }

    return errors;
  };

  return { validate, fetcher };
};
