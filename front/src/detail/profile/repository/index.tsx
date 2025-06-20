import { IProfileRepository, ProfileType } from "@/core/usecase/profile";

const getProfile = async (): Promise<ProfileType[]> => {
  // Simulate a profile fetch request
  return new Promise((resolve) => {
    setTimeout(() => {
      const profile: ProfileType[] = [
        {
          id: "1",
          name: "John Doe",
          password: "password123",
          department: "Engineering",
          imageUrl: "https://github.com/shadcn.png",
        },
      ];
      resolve(profile);
    }, 1000);
  });
};

export const profileRepository: IProfileRepository = {
  getProfile,
};
