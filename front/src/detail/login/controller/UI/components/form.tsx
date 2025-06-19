import { Formik, Form as FormikForm } from "formik";
import { FormType } from "@/core/usecase/login/login";
import { LOGIN_SCHEMA } from "../../../../../features/loginDialog/const";
import { FormInput } from "@/components/common/formInput";
import { Button } from "@/components/shadcn/button";

type Props = {
  onSubmit: (values: FormType) => void;
};

export const Form = ({ onSubmit }: Props) => {
  return (
    <Formik<FormType>
      initialValues={{
        name: "",
        password: "",
      }}
      onSubmit={(values, helpers) => {
        onSubmit(values);
        helpers.resetForm();
      }}
      validationSchema={LOGIN_SCHEMA}
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
            value={values.password}
            label="パスワード"
            id="password"
            type="password"
            errors={errors.password}
            touched={touched.password}
          />
          <div className="flex justify-end pt-2">
            <Button type="submit" className="font-bold">
              ログイン
            </Button>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};
