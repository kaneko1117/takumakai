"use client";

import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { useFormik } from "formik";
import { FormType } from "../type";
import { Input } from "@/components/shadcn/input";
import { Button } from "@/components/shadcn/button";
import { SIGNUP_SCHEMA } from "../const";

type FormInputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number | readonly string[];
  label: string;
  id: string;
  type: HTMLInputTypeAttribute;
};

const FormInput = ({ onChange, value, label, id, type }: FormInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray" htmlFor={id}>
        {label}
      </label>
      <Input
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        value={value}
        className="rounded-sm border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export const Form = () => {
  const formik = useFormik<FormType>({
    initialValues: {
      name: "",
      department: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // ここでフォームの送信処理を実装します
      formik.resetForm();
    },
    validationSchema: { SIGNUP_SCHEMA },
  });
  return (
    <form className="flex flex-col gap-4 py-4" onSubmit={formik.handleSubmit}>
      <FormInput
        onChange={formik.handleChange}
        value={formik.values.name}
        label="名前"
        id="name"
        type="text"
      />
      {formik.errors.name && (
        <p className="text-red-500 text-sm">{formik.errors.name}</p>
      )}
      <FormInput
        onChange={formik.handleChange}
        value={formik.values.department}
        label="部署"
        id="department"
        type="text"
      />
      <FormInput
        onChange={formik.handleChange}
        value={formik.values.password}
        label="パスワード"
        id="password"
        type="password"
      />
      <div className="flex justify-end pt-2">
        <Button type="submit" className="font-bold">
          入会する
        </Button>
      </div>
    </form>
  );
};
