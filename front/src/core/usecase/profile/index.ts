import { User } from "@/core/entity/users/model";

export type ProfileType = User;

export interface IProfileRepository {
  getProfile: () => Promise<ProfileType[]>;
}
export interface IProfileUseCase extends IProfileRepository {}

export const profileUseCase = (repo: IProfileRepository): IProfileUseCase => {
  return {
    getProfile: repo.getProfile,
  };
};
