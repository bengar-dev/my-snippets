import { FieldError, FieldErrorsImpl, FieldValues } from "react-hook-form";

interface Props {
  type: "text" | "email" | "password";
  label?: string;
  field: FieldValues;
  error?: FieldError | FieldErrorsImpl<FieldValues>;
}

export const InputValue: React.FC<Props> = ({ field, type, label }) => {
  return (
    <div className="flex flex-col w-full">
      {label && <span className="mt-1 font-bold">{label}</span>}
      <input
        type={type}
        className="p-2 outline-none rounded text-violet-950 font-bold bg-white"
        {...field}
      />
    </div>
  );
};
