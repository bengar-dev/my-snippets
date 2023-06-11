import toast from "react-hot-toast";
import { BiLogOutCircle } from "react-icons/bi";
import { Button } from "./Button";
import { useGetLogout } from "../../hooks/user/useGetLogout";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const DropdownMenu: React.FC<Props> = ({ children }) => {
  const { mutateAsync } = useGetLogout();

  const handleLogout = async () => {
    toast.promise(mutateAsync(), {
      loading: "Logging out...",
      success: "Logged out successfully",
      error: "Error logging out",
    });
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        className="btn m-1 bg-transparent border-transparent text-violet-200 hover:text-violet-400 hover:bg-transparent hover:border-transparent"
      >
        {children}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-violet-950 rounded-box w-52"
      >
        <Button
          type="button"
          value="Logout"
          icon={<BiLogOutCircle className="text-xl" />}
          variant="primary"
          func={handleLogout}
        />
      </ul>
    </div>
  );
};
