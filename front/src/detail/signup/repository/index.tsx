import { ISignupRepository, FormType } from "@/core/usecase/signup";

const signup = async (data: FormType): Promise<void> => {
  // Simulate a signup request
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(
        `User ${data.name} signed up with department ${data.department}`
      );
      resolve();
    }, 1000);
  });
};

export const signupRepository: ISignupRepository = {
  signup,
};
