"use client";

import { Formik, Form as FormikForm } from "formik";
import { FormType } from "../type";
import { Button } from "@/components/shadcn/button";
import { SIGNUP_SCHEMA } from "../const";
import { FormInput } from "@/components/common/formInput";

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
