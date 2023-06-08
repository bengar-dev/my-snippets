import axios from "axios";
import { useQuery } from "react-query";
import { Response } from "../../types/common.types";
import { Snippet } from "../../types/snippet/snippet.types";
import { useRecoilState } from "recoil";
import { snippetsState } from "../../atoms/snippets.atoms";

export const useGetSnippets = () => {
  const [snippets, setSnippets] = useRecoilState(snippetsState);

  return useQuery({
    queryKey: ["user_snippets"],
    queryFn: async (): Promise<Response<Snippet[]>> => {
      const { data: response } = await axios.get(
        `${import.meta.env.VITE_API_URL}snippets`,
        { withCredentials: true }
      );
      return response;
    },
    onSuccess: (data) => {
      setSnippets(data.data);
    },
    refetchOnWindowFocus: false,
  });
};
