import {
  IMahjongPlayStyleUseCase,
  MahjongPlayStyleType,
} from "@/core/usecase/mahjongPlayStyle";

export const useMahjongPlayStyleController = (
  useCase: IMahjongPlayStyleUseCase,
  data: MahjongPlayStyleType[]
) => {
  const methods = useCase.mahjongPlayStyleMethods;
  const formattedData = data.map((item) => ({
    ...item,
    subject: methods.handleMahjongPlayStyleSubject(item.subject),
  }));

  return { formattedData };
};
