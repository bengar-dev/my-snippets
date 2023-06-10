import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Response } from "../../types/common.types";
import { Snippet } from "../../types/snippet/snippet.types";
import { useRecoilState } from "recoil";
import { snippetsState } from "../../atoms/snippets.atoms";

export const useGetSnippets = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
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
    retry: false,
  });
};
