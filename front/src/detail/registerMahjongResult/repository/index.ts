import {
  MahjongResultTypes,
  IRegisterMahjongResultRepository,
} from "@/core/usecase/registerMahjongResult";

export const registerMahjongResults = async (
  mahjongResults: MahjongResultTypes
): Promise<void> => {
  setTimeout(() => {
    console.log("Registered Mahjong results:", mahjongResults);
  }, 1000);
};

export const getMahjongResults = async (
  gameId: string,
  hanshuangId: string
): Promise<MahjongResultTypes> => {
  return [
    {
      userId: "1",
      userName: "Player 1",
      score: 80000,
      isTobi: false,
      isTobashi: true,
    },
    {
      userId: "2",
      userName: "Player 2",
      score: -25000,
      isTobi: true,
      isTobashi: false,
    },
    {
      userId: "3",
      userName: "Player 3",
      score: 20000,
      isTobi: false,
      isTobashi: false,
    },
    {
      userId: "4",
      userName: "Player 4",
      score: 25000,
      isTobi: false,
      isTobashi: false,
    },
  ];
};

export const registerMahjongResultRepository: IRegisterMahjongResultRepository =
  {
    registerMahjongResults,
    getMahjongResults,
  };
