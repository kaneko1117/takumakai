import { ILoginRepository } from "@/core/usecase/login/login";
import { FormType } from "@/core/usecase/login/login";

const login = async (data: FormType): Promise<void> => {
  // Simulate a login request
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`User ${data.name} logged in`);
      resolve();
    }, 1000);
  });
};

export const loginRepository: ILoginRepository = {
  login,
};
