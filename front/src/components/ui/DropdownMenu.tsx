import { BiLogOutCircle } from "react-icons/bi";
import { Button } from "./Button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const DropdownMenu: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("utk");
    navigate("/signin");
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
