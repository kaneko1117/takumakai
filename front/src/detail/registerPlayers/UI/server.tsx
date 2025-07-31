import { registerPlayersUseCase } from "@/core/usecase/registerPlayers";
import { registerPlayerRepository } from "../repository";
import { RegisterPlayers } from ".";

export const RegisterPlayersServer = async () => {
  const repo = registerPlayerRepository;
  const useCase = registerPlayersUseCase(repo);
  const { getPlayers } = useCase;

  const playersData = await getPlayers();

  return <RegisterPlayers data={playersData} />;
};
