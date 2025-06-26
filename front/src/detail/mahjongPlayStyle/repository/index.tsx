import {
  IMahjongPlayStyleRepository,
  MahjongPlayStyleType,
} from "@/core/usecase/mahjongPlayStyle";

const getMahjongPlayStyle = async (): Promise<MahjongPlayStyleType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const playStyles: MahjongPlayStyleType[] = [
        { subject: "last_avoidance_rate", percentage: 0.9 },
        { subject: "top_2_rate", percentage: 0.63 },
        { subject: "top_rate", percentage: 0.33 },
      ];
      resolve(playStyles);
    }, 1000);
  });
};

export const mahjongPlayStyleRepository: IMahjongPlayStyleRepository = {
  getMahjongPlayStyle,
};
