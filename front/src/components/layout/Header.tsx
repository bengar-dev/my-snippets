import { useEffect } from "react";
import Cookies from "js-cookie";
import { AiOutlineCode, AiOutlineSearch } from "react-icons/ai";
import { useGetProfil } from "../../hooks/user/useGetProfil";
import { useNavigate, useParams } from "react-router-dom";
import { DropdownMenu } from "../ui/DropdownMenu";
import { ToasterNotif } from "../ui/ToasterNotif";
import { Link } from "react-router-dom";
import { InputValue } from "../form/inputs/InputValue";
import { Button } from "../ui/Button";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchSnippetSchema } from "../../schemas/snippets";
import { useSearchSnippets } from "../../hooks/snippets/useSearchSnippets";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { mutateAsync } = useSearchSnippets();
  const { data, error } = useGetProfil();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      value: "",
    },
    resolver: yupResolver(searchSnippetSchema),
  });

  useEffect(() => {
    if (error && !data) {
      Cookies.remove("utk");
      navigate("/signin");
    }
  }, [data, error, navigate]);

  const onSubmit = (data: { value: string }) => {
    mutateAsync(data.value);
  };

  return (
    <header className="absolute top-0 w-full h-20 p-4 bg-violet-950 text-slate-200 flex justify-between items-center">
      <ToasterNotif />
      <div className="flex space-x-2 items-center">
        <AiOutlineCode className="text-2xl text-violet-400" />
        <span className="text-2xl font-bold">
          My<span>Snippets</span>
        </span>
      </div>
      <div>
        <form className="p-2 flex gap-1" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="value"
            control={control}
            render={({ field }) => <InputValue type="text" field={field} />}
          />
          <Button
            type="submit"
            variant="primary"
            icon={<AiOutlineSearch />}
            fullSize
          />
        </form>
      </div>
      <Link to="/about" className="font-bold text-yellow-200 hover:text-white">
        ⚠️ This is a beta version, more informations here
      </Link>
      {data && (
        <div className="flex items-center space-x-2">
          <DropdownMenu>
            <>
              <img
                src={data.data.avatarUrl}
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <span className="font-bold">{data.data.username}</span>
            </>
          </DropdownMenu>
        </div>
      )}
    </header>
  );
};
