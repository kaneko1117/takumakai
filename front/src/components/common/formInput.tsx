import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import { Input } from "../shadcn/input";

type FormInputProps = {
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number | readonly string[];
  label: string;
  id: string;
  type: HTMLInputTypeAttribute;
  errors: string | undefined;
  touched: boolean | undefined;
};

export const FormInput = ({
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
        <label
          className="text-sm text-gray"
          htmlFor={id}
          aria-invalid={Boolean(touched && errors)}
        >
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
