import { IProfileUseCase } from "@/core/usecase/profile";

export const useProfileController = (useCase: IProfileUseCase) => {
  const fetcher = useCase.getProfile;

  return { fetcher };
};
