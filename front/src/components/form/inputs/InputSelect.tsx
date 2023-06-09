import { FieldError, FieldErrorsImpl, FieldValues } from "react-hook-form";
import { Language } from "../../../types/language/language.types";

interface Props {
  values: Language[];
  field: FieldValues;
  defaultValues: string;
  label?: string;
  error?: FieldError | FieldErrorsImpl<FieldValues>;
}

export const InputSelect: React.FC<Props> = ({
  defaultValues,
  field,
  label,
  values,
}) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <span className="font-bold">{label}</span>
      <select
        className="p-2 outline-none rounded text-violet-950 font-bold"
        {...field}
      >
        <option>{defaultValues}</option>
        {values.map((value, index) => (
          <option key={index} value={value.id}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
};
