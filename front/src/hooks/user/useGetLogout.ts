import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useGetLogout = () => {
  return useMutation({
    mutationFn: async (): Promise<void> => {
      await axios.post(
        `${import.meta.env.VITE_API_URL}auth/logout`,
        {},
        { withCredentials: true }
      );
    },
    onSuccess() {
      window.location.href = import.meta.env.VITE_APP_URL;
    },
    onError(err) {
      console.log(err);
    },
  });
};
