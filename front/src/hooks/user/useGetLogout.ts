import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";

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
      Cookies.remove("utk");
      window.location.href = import.meta.env.VITE_APP_URL;
    },
    onError(err) {
      console.log(err);
    },
  });
};
