import {
  GetPlayersType,
  IRegisterRepository,
  RegisterPlayersType,
} from "@/core/usecase/registerPlayers";

const registerPlayers = async (data: RegisterPlayersType): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(data);
      resolve();
    }, 1000);
  });
};

const getPlayers = async (): Promise<GetPlayersType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const players: GetPlayersType = [
        { id: "1", name: "琢磨さん" },
        { id: "2", name: "A" },
        { id: "3", name: "B" },
        { id: "4", name: "C" },
        { id: "5", name: "D" },
      ];
      resolve(players);
    }, 1000);
  });
};

export const registerPlayerRepository: IRegisterRepository = {
  registerPlayers,
  getPlayers,
};
