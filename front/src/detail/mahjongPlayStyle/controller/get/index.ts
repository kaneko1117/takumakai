import { IMahjongPlayStyleUseCase } from "@/core/usecase/mahjongPlayStyle";

export const getPlayStyle = async (useCase: IMahjongPlayStyleUseCase) => {
  const fetcher = useCase.getMahjongPlayStyle;
  const playStyleData = await fetcher();
  if (!playStyleData) {
    throw new Error("Failed to fetch Mahjong play style data");
  }
  return playStyleData;
};
