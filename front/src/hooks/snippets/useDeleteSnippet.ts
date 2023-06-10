import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteSnipper = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { data: response } = await axios.delete(
        `${import.meta.env.VITE_API_URL}snippets/${id}`,
        { withCredentials: true }
      );

      return response;
    },
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: ["user_snippets"] });
    },
  });
};
