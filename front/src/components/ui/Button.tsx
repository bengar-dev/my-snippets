interface Props {
  type: "submit" | "button";
  value: string;
  icon?: React.ReactNode;
  variant?: VariantButton;
  func?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  shadow?: boolean;
}

type VariantButton = "github";

export const Button: React.FC<Props> = ({
  icon,
  func,
  shadow,
  type,
  variant,
  value,
}) => {
  return (
    <button
      type={type}
      onClick={(event) => {
        if (func) {
          func(event);
        }
      }}
      className={`transition-all flex items-center space-x-2 text-white font-bold py-2 px-4 rounded ${handleStyle(
        variant
      )} ${shadow ? " hover:shadow-lg" : ""}`}
    >
      {icon && icon}
      <span>{value}</span>
    </button>
  );
};

function handleStyle(variant?: VariantButton) {
  switch (variant) {
    case "github":
      return "bg-stone-700 hover:bg-stone-600";
    default:
      return "bg-blue-500 hover:bg-blue-700";
  }
}
