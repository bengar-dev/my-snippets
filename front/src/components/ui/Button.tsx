import { RiLoader5Fill } from "react-icons/ri";

interface Props {
  type: "submit" | "button";
  value?: string;
  icon?: React.ReactNode;
  variant?: VariantButton;
  func?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  shadow?: boolean;
  active?: boolean;
  loading?: boolean;
  fullSize?: boolean;
}

type VariantButton =
  | "github"
  | "primary"
  | "outline-primary"
  | "delete"
  | "disabled";

export const Button: React.FC<Props> = ({
  active = false,
  icon,
  func,
  loading = false,
  fullSize = false,
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
      className={`transition-all flex items-center space-x-2 text-white font-bold py-2 px-4 rounded ${
        fullSize ? "w-full" : "w-max"
      } ${handleStyle(active, variant)} ${shadow ? " hover:shadow-lg" : ""}`}
    >
      {loading ? (
        <RiLoader5Fill className="animate-spin text-2xl" />
      ) : (
        <>
          {icon && icon}
          {value && <span>{value}</span>}
        </>
      )}
    </button>
  );
};

function handleStyle(active: boolean, variant?: VariantButton) {
  switch (variant) {
    case "github":
      return "bg-stone-700 hover:bg-stone-600";
    case "primary":
      return "bg-violet-500 hover:bg-violet-700";
    case "delete":
      return "bg-red-500 hover:bg-red-700";
    case "disabled":
      return "bg-gray-400 cursor-not-allowed";
    case "outline-primary":
      return `${
        active
          ? "bg-violet-500 hover:bg-violet-700"
          : "bg-transparent hover:bg-violet-500 text-violet-400 font-semibold hover:text-white py-2 px-4 border border-violet-400 hover:border-transparent rounded"
      }`;
    default:
      return "bg-blue-500 hover:bg-blue-700";
  }
}
