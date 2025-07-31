import { ILoginRepository } from "@/core/usecase/login";
import { FormType } from "@/core/usecase/login";

const login = async (data: FormType): Promise<void> => {
  // Simulate a login request
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const loginRepository: ILoginRepository = {
  login,
};
