import Cookies from "js-cookie";

import { BlockSign } from "../components/blocks/BlockSign";
import { Button } from "../components/ui/Button";
import { Welcome } from "../templates/Welcome";

import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn: React.FC = () => {
  const utk = Boolean(Cookies.get("utk"));
  const navigate = useNavigate();

  useEffect(() => {
    if (utk) {
      navigate("/");
    }
  }, [utk, navigate]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    /**
     * TODO: add host api to .env
     */
    window.location.href = "http://localhost:3300/api/auth/sign";
  };

  return (
    <Welcome>
      <BlockSign>
        <h1 className="font-bold text-xl my-4">💻 My snippets</h1>
        <p className="mb-20 text-sm font-medium">
          Organize and save your code's snippets !
        </p>
        <Button
          value="Sign-in with GitHub"
          variant="github"
          type="button"
          icon={<FaGithub />}
          func={handleClick}
          shadow
        />
      </BlockSign>
    </Welcome>
  );
};
