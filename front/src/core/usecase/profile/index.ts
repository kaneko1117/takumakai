import { User } from "@/core/entity/users/model";

export type ProfileType = User;

export interface IProfileUseCase {
  getProfile: () => Promise<ProfileType[]>;
}

export interface IProfileRepository {
  getProfile: () => Promise<ProfileType[]>;
}

export const profileUseCase = (repo: IProfileRepository): IProfileUseCase => {
  return {
    getProfile: repo.getProfile,
  };
};
