"use client";

import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { Formik, Form as FormikForm } from "formik";
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
  errors: string | undefined;
  touched: boolean | undefined;
};

const FormInput = ({
  onChange,
  value,
  label,
  id,
  type,
  errors,
  touched,
}: FormInputProps) => {
  return (
    <div>
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
      <p className="text-red-500 text-[12px] h-3">{touched && errors}</p>
    </div>
  );
};

export const Form = () => {
  return (
    <Formik<FormType>
      initialValues={{
        name: "",
        department: "",
        password: "",
      }}
      onSubmit={(values, helpers) => {
        console.log(values);
        helpers.resetForm();
      }}
      validationSchema={SIGNUP_SCHEMA}
    >
      {({ errors, touched, handleChange, values }) => (
        <FormikForm className="flex flex-col gap-4 py-4">
          <FormInput
            onChange={handleChange}
            value={values.name}
            label="名前"
            id="name"
            type="text"
            errors={errors.name}
            touched={touched.name}
          />

          <FormInput
            onChange={handleChange}
            value={values.department}
            label="部署"
            id="department"
            type="text"
            errors={errors.department}
            touched={touched.department}
          />
          <FormInput
            onChange={handleChange}
            value={values.password}
            label="パスワード"
            id="password"
            type="password"
            errors={errors.password}
            touched={touched.password}
          />
          <div className="flex justify-end pt-2">
            <Button type="submit" className="font-bold">
              入会する
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};
