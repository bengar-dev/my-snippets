import { atom } from "recoil";
import { Snippet } from "../types/snippet/snippet.types";

export const snippetsState = atom<Snippet[]>({
  key: "snippets",
  default: [],
});
