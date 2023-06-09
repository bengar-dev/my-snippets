import { FieldError, FieldErrorsImpl, FieldValues } from "react-hook-form";

interface Props {
  label?: string;
  field: FieldValues;
  error?: FieldError | FieldErrorsImpl<FieldValues>;
}

export const InputTextArea: React.FC<Props> = ({ field, label }) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <span className="font-bold">{label}</span>
      <textarea
        className="p-2 outline-none rounded font-medium text-slate-950 h-40 text-sm"
        {...field}
      ></textarea>
    </div>
  );
};
