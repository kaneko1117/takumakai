"use client";
import { Users } from "lucide-react";
import {
  Card as ShadcnCard,
  CardContent,
  CardHeader,
} from "@/components/shadcn/card";
import {
  GetPlayersType,
  registerPlayersUseCase,
} from "@/core/usecase/registerPlayers";
import { registerPlayerRepository } from "../repository";
import { useRegisterPlayers } from "../controller/hooks/useRegisterPlayers";
import { Checkbox } from "./components/checkbox";

type Props = {
  data: GetPlayersType;
};

export const RegisterPlayers = ({ data }: Props) => {
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
      <CardContent>
        <Checkbox onSubmit={fetcher} validate={validate} data={data} />
      </CardContent>
    </ShadcnCard>
  );
};
