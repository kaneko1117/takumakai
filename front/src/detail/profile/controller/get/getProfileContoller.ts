import { IProfileUseCase } from "@/core/usecase/profile";

export const getProfileController = (useCase: IProfileUseCase) => {
  const fetcher = useCase.getProfile;

  return { fetcher };
};
