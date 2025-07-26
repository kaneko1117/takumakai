"use client";
import { Dialog } from "@/components/common/dialog";
import { Form } from "./components/form";
import { loginRepository } from "../repository";
import { loginUseCase } from "@/core/usecase/login";
import { useLoginController } from "../controller/hooks/useLoginController";

export const LoginDialog = () => {
  const repo = loginRepository;
  const useCase = loginUseCase(repo);
  const { fetcher, validate } = useLoginController(useCase);
  return (
    <div className="pr-4">
      <Dialog title="ログイン" variant="login">
        <Form onSubmit={fetcher} validate={validate} />
      </Dialog>
    </div>
  );
};
