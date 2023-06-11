import { FieldError, FieldErrorsImpl, FieldValues } from "react-hook-form";

interface Props {
  field: FieldValues;
  variant?: VariantTextArea;
  label?: string;
  error?: FieldError | FieldErrorsImpl<FieldValues>;
}

type VariantTextArea = "default" | "code";

export const InputTextArea: React.FC<Props> = ({
  field,
  label,
  variant = "default",
}) => {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <span className="font-bold">{label}</span>
      <textarea className={handleStyleTextArea(variant)} {...field}></textarea>
    </div>
  );
};

function handleStyleTextArea(style: VariantTextArea): string {
  switch (style) {
    case "default":
      return "p-2 outline-none rounded font-medium text-slate-950 h-40 text-sm";
    case "code":
      return "p-2 bg-violet-800 outline-none rounded font-mono font-medium text-slate-200 h-64 text-sm";
    default:
      return "p-2 outline-none rounded font-medium text-slate-950 h-40 text-sm";
  }
}
