import Link from "next/link";
import { profileRepository } from "@/detail/profile/repository";
import { Profile as RootProfile } from "../components";
import { profileUseCase } from "@/core/usecase/profile";
import { getProfileController } from "../../get/getProfileContoller";

export const Profile = async () => {
  const repo = profileRepository;
  const useCase = profileUseCase(repo);
  const { fetcher } = getProfileController(useCase);
  const TEST_DATA = await fetcher();

  return TEST_DATA.map((data) => (
    <Link key={data.id} href={`/member/${data.id}`}>
      <RootProfile data={data} variant="member" />
    </Link>
  ));
};
