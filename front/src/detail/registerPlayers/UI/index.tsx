import { Users } from "lucide-react";
import {
  Card as ShadcnCard,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/shadcn/card";
import { registerPlayersUseCase } from "@/core/usecase/registerPlayers";
import { registerPlayerRepository } from "../repository";
import { useRegisterPlayers } from "../controller/hooks/useRegisterPlayers";

export const RegisterPlayers = () => {
  // This component will handle the registration of players
  // It will use the registerPlayersUseCase and registerPlayerRepository to perform the registration

  // Placeholder for future implementation
  const repo = registerPlayerRepository;
  const useCase = registerPlayersUseCase(repo);
  const { validate, fetcher } = useRegisterPlayers(useCase);
  return (
    <ShadcnCard>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="w-6 h-6 text-primary" />
          <h2 className="font-bold">参加者選択</h2>
        </div>
      </CardHeader>
      <CardContent></CardContent>
    </ShadcnCard>
  );
};
