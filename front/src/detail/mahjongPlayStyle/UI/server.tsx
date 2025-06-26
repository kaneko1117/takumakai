import { mahjongPlayStyleUseCase } from "@/core/usecase/mahjongPlayStyle";
import { mahjongPlayStyleRepository } from "../repository";
import { getPlayStyle } from "../controller/get";
import { PlayStyle } from ".";

export const PlayStyleServer = async () => {
  const repo = mahjongPlayStyleRepository;
  const useCase = mahjongPlayStyleUseCase(repo);
  const playStyleData = await getPlayStyle(useCase);
  return <PlayStyle data={playStyleData} />;
};
