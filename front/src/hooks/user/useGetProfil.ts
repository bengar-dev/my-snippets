import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { userProfilState } from "../../atoms/user.atoms";
import { User } from "../../types/user/user.types";
import { Response } from "../../types/common.types";

export const useGetProfil = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const [userProfil, setUserProfil] = useRecoilState(userProfilState);

  return useQuery({
    queryKey: ["user_profil"],
    queryFn: async (): Promise<Response<User>> => {
      const { data: response } = await axios.get(
        `${import.meta.env.VITE_API_URL}auth/me`,
        { withCredentials: true }
      );
      return response;
    },
    onSuccess: (data) => {
      setUserProfil(data.data);
    },
    refetchOnWindowFocus: false,
    retry: false,
  });
};
