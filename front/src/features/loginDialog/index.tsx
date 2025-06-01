"use client";
import { Dialog } from "@/components/common/dialog";
import { Form } from "./components/form";

export const LoginDialog = () => {
  return (
    <div className="pr-4">
      <Dialog title="ログイン" variant="login">
        <Form />
      </Dialog>
    </div>
  );
};
