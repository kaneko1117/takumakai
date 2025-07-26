import {
  GetPlayersType,
  IRegisterRepository,
  RegisterPlayersType,
} from "@/core/usecase/registerPlayers";

const registerPlayers = async (data: RegisterPlayersType): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.id.forEach((id) => {
        console.log(`Registered player with ID: ${id}`);
      });
      resolve();
    }, 1000);
  });
};

const getPlayers = async (): Promise<GetPlayersType> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const players: GetPlayersType = [
        { id: "1", name: "琢磨さん" },
        { id: "2", name: "あゆむ" },
        { id: "3", name: "松本くん" },
        { id: "4", name: "南里くん" },
        { id: "5", name: "金子" },
      ];
      resolve(players);
    }, 1000);
  });
};

export const registerPlayerRepository: IRegisterRepository = {
  registerPlayers,
  getPlayers,
};
