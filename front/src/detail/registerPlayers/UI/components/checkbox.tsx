import { Formik, FormikErrors } from "formik";
import {
  GetPlayersType,
  RegisterPlayersType,
} from "@/core/usecase/registerPlayers";
import { Checkbox as ShadcnCheckBox } from "@/components/shadcn/checkbox";
import {
  Alert as ShadcnAlert,
  AlertDescription,
} from "@/components/shadcn/alert";
import { AlertDialog } from "./alert-dialog";
import { PLAYER_NUMBER } from "@/core/entity/users/service";
import { useState } from "react";

type Props = {
  onSubmit: (values: RegisterPlayersType) => Promise<void>;
  validate: (values: RegisterPlayersType) => FormikErrors<RegisterPlayersType>;
  data: GetPlayersType;
};

export const Checkbox = ({ onSubmit, validate, data }: Props) => {
  const [names, setNames] = useState<string[]>([]);
  return (
    <Formik<RegisterPlayersType>
      initialValues={{ id: [] }}
      onSubmit={async (values, helpers) => {
        await onSubmit(values);
        // router処理をするまでの間、formをリセットしておく
        helpers.resetForm();
        setNames([]);
      }}
      validate={validate}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ errors, values, handleChange, handleSubmit, isSubmitting }) => (
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {data.map((player) => (
            <div key={player.id} className="flex items-center gap-2">
              <ShadcnCheckBox
                id={player.id}
                name="id"
                value={player.id}
                checked={values.id.includes(player.id)}
                onCheckedChange={(isChecked) => {
                  if (isChecked) {
                    handleChange({
                      target: { name: "id", value: [...values.id, player.id] },
                    });
                    setNames((prev) => [...prev, player.name]);
                  } else {
                    handleChange({
                      target: {
                        name: "id",
                        value: values.id.filter((id) => id !== player.id),
                      },
                    });
                    setNames((prev) =>
                      prev.filter((name) => name !== player.name)
                    );
                  }
                }}
              />
              <label htmlFor={player.id}>{player.name}</label>
            </div>
          ))}

          <div className="text-red-500 font-medium h-4 text-sm">
            {errors.id}
          </div>
          <ShadcnAlert variant="default" className="bg-primary/10 border-none">
            <AlertDescription className="text-sm">
              <li>参加者を４人選択してください。</li>
            </AlertDescription>
          </ShadcnAlert>

          <AlertDialog
            isSubmitting={isSubmitting}
            isDisabled={values.id.length !== PLAYER_NUMBER}
            onConfirm={handleSubmit}
            names={names}
          />
        </form>
      )}
    </Formik>
  );
};
