import { Formik, Form, FormikErrors } from "formik";
import {
  GetPlayersType,
  RegisterPlayersType,
} from "@/core/usecase/registerPlayers";
import { Checkbox as ShadcnCheckBox } from "@/components/shadcn/checkbox";
import { Button } from "@/components/shadcn/button";

type Props = {
  onSubmit: (values: RegisterPlayersType) => void;
  validate: (values: RegisterPlayersType) => FormikErrors<RegisterPlayersType>;
  data: GetPlayersType;
};

export const Checkbox = ({ onSubmit, validate, data }: Props) => {
  return (
    <Formik<RegisterPlayersType>
      initialValues={{ id: [] }}
      onSubmit={(values, helpers) => {
        console.log("Submitting values:", values);
        onSubmit(values);
        helpers.resetForm();
      }}
      validate={validate}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ errors, values, handleChange }) => (
        <Form className="flex flex-col gap-4">
          {data.map((player) => (
            <div key={player.id} className="flex items-center gap-2">
              <ShadcnCheckBox
                id={player.id}
                name="id"
                value={player.id}
                checked={values.id.includes(player.id)}
                onCheckedChange={(isChecked) => {
                  const newValues = isChecked
                    ? [...values.id, player.id]
                    : values.id.filter((id) => id !== player.id);
                  handleChange({
                    target: { name: "id", value: newValues },
                  });
                }}
              />
              <label htmlFor={player.id}>{player.name}</label>
            </div>
          ))}

          <div className="text-red-500 font-medium h-4 text-sm">
            {errors.id}
          </div>

          <Button type="submit" className="btn btn-primary mt-5">
            登録
          </Button>
        </Form>
      )}
    </Formik>
  );
};
