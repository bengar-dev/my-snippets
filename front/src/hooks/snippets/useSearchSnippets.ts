import { useMutation } from "@tanstack/react-query";
import { Response } from "../../types/common.types";
import { Snippet } from "../../types/snippet/snippet.types";
import axios from "axios";
import { useRecoilState } from "recoil";
import { searchSnippetState } from "../../atoms/snippets.atoms";
import { useNavigate } from "react-router-dom";

export const useSearchSnippets = () => {
  const navigate = useNavigate();
  const [searchSnippets, setSearchSnippets] =
    useRecoilState(searchSnippetState);
  return useMutation({
    mutationFn: async (search: string): Promise<Response<Snippet[]>> => {
      const { data: response } = await axios.post(
        `${import.meta.env.VITE_API_URL}snippets/search?value=${search}`,
        {},
        { withCredentials: true }
      );
      return response;
    },
    onSuccess: ({ data }) => {
      setSearchSnippets(data);
      navigate("/search");
    },
  });
};
