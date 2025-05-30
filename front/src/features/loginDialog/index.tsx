"use client";
import { Dialog } from "@/components/common/dialog";
import { Form } from "./components/form";

export const LoginDialog = () => {
  return (
    <Dialog title="ログイン" variant="login">
      <Form />
    </Dialog>
  );
};
