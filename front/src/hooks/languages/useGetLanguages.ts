import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Response } from "../../types/common.types";
import { Language } from "../../types/language/language.types";

export const useGetLanguages = () => {
  return useQuery({
    queryKey: ["global_languages"],
    queryFn: async (): Promise<Response<Language[]>> => {
      const { data: response } = await axios.get(
        `${import.meta.env.VITE_API_URL}snippets/languages`,
        { withCredentials: true }
      );
      return response;
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};
