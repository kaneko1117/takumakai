import {
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

export const registerPlayerRepository: IRegisterRepository = {
  registerPlayers,
};
