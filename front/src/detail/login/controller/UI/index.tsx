"use client";
import { Dialog } from "@/components/common/dialog";
import { Form } from "./components/form";
import { loginRepository } from "../../repository";
import { loginUseCase } from "@/core/usecase/login/login";
import { useLoginController } from "../hooks/useLoginController";

export const LoginDialog = () => {
  const repo = loginRepository;
  const useCase = loginUseCase(repo);
  const { fetcher } = useLoginController(useCase);
  return (
    <div className="pr-4">
      <Dialog title="ログイン" variant="login">
        <Form onSubmit={fetcher} />
      </Dialog>
    </div>
  );
};
