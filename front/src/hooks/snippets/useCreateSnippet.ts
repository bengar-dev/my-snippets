import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Snippet } from "../../types/snippet/snippet.types";
import { useRecoilState } from "recoil";
import { previewSnippetsState } from "../../atoms/snippets.atoms";

export const useCreateSnippet = () => {
  const queryClient = useQueryClient();
  const [preview, setPreview] = useRecoilState(previewSnippetsState);

  return useMutation({
    mutationFn: async (data: Snippet) => {
      const { data: response } = await axios.post(
        `${import.meta.env.VITE_API_URL}snippets`,
        data,
        { withCredentials: true }
      );

      return response;
    },
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ["user_snippets"] });
      if (preview.length > 0) {
        setPreview([]);
      }
    },
  });
};
