import {
  GameType,
  HanshuangResultTypes,
  IRegisterHanshuangResultRepository,
  PlayerTypes,
} from "@/core/usecase/registerHanshuangResult";

export const getPlayers = async (): Promise<PlayerTypes> => {
  return [
    {
      id: "1",
      name: "Player 1",
    },
    {
      id: "2",
      name: "Player 2",
    },
    {
      id: "3",
      name: "Player 3",
    },
    {
      id: "4",
      name: "Player 4",
    },
  ];
};

export const registerHanshuangResults = async (
  hanshuangResults: HanshuangResultTypes
): Promise<void> => {
  setTimeout(() => {
    console.log("Registered Hanshuang results:", hanshuangResults);
  }, 1000);
};

export const getHanshuangResults = async (
  hanshuangID: string
): Promise<HanshuangResultTypes> => {
  return [
    {
      id: "1",
      gameId: "1",
      userId: "1",
      score: 30000,
      isTobi: false,
    },
    {
      id: "2",
      gameId: "1",
      userId: "2",
      score: 25000,
      isTobi: true,
    },
    {
      id: "3",
      gameId: "1",
      userId: "3",
      score: 20000,
      isTobi: false,
    },
    {
      id: "4",
      gameId: "1",
      userId: "4",
      score: 25000,
      isTobi: false,
    },
  ];
};

const getGame = async (): Promise<GameType> => {
  return {
    gameId: "1",
  };
};

export const registerHanshuangResultRepository: IRegisterHanshuangResultRepository =
  {
    getPlayers,
    registerHanshuangResults,
    getHanshuangResults,
    getGame,
  };
