import { useEffect } from "react";
import Cookies from "js-cookie";
import { AiOutlineCode } from "react-icons/ai";
import { useGetProfil } from "../../hooks/user/useGetProfil";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const { data, error } = useGetProfil();

  useEffect(() => {
    if (error && !data) {
      Cookies.remove("utk");
      navigate("/signin");
    }
  }, [data, error, navigate]);

  return (
    <header className="absolute top-0 w-full h-20 p-4 bg-violet-950 text-slate-200 flex justify-between items-center">
      <div className="flex space-x-2 items-center">
        <AiOutlineCode className="text-2xl text-violet-400" />
        <span className="text-2xl font-bold">
          My<span>Snippets</span>
        </span>
      </div>
      <div className="font-medium text-base text-yellow-200">
        <p>⚠️ This is a beta version, more features are comming</p>
      </div>
      {data && (
        <div className="flex items-center space-x-2">
          <img
            src={data.data.avatarUrl}
            alt="avatar"
            className="w-12 h-12 rounded-full"
          />
          <span className="font-bold">{data.data.username}</span>
        </div>
      )}
    </header>
  );
};
