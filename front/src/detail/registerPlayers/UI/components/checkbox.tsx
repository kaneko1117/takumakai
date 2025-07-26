import { Formik, Form, FormikErrors } from "formik";
import {
  GetPlayersType,
  RegisterPlayersType,
} from "@/core/usecase/registerPlayers";
import { Checkbox as ShadcnCheckBox } from "@/components/shadcn/checkbox";

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
    >
      {({ errors, touched, values, handleChange }) => (
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
          {errors.id && touched.id && (
            <div className="text-red-500">{errors.id}</div>
          )}
          <button type="submit" className="btn btn-primary mt-4">
            登録
          </button>
        </Form>
      )}
    </Formik>
  );
};
