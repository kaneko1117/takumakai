import { registerMahjongResultUseCase } from "@/core/usecase/registerMahjongResult";
import { registerMahjongResultRepository } from "../repository";
import { RegisterMahjongResult } from ".";

type Props = {
  game_id: string;
  hanshuang_id: string;
};

export const RegisterMahjongResultServer = async ({
  game_id,
  hanshuang_id,
}: Props) => {
  const repo = registerMahjongResultRepository;
  const useCase = registerMahjongResultUseCase(repo);
  const { getMahjongResults } = useCase;

  const data = await getMahjongResults(game_id, hanshuang_id);

  return <RegisterMahjongResult data={data} />;
};
