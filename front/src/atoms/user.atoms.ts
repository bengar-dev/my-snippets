import { atom } from "recoil";
import { User } from "../types/user/user.types";

export const userProfilState = atom<User>({
  key: "userProfil",
  default: {
    id: "",
    username: "",
    avatarUrl: "",
    displayName: "",
    profileUrl: "",
    createdAt: "",
    updatedAt: "",
  },
});
