import { atom } from "recoil";
import { Snippet } from "../types/snippet/snippet.types";

export const snippetsState = atom<Snippet[]>({
  key: "snippets",
  default: [],
});

export const previewSnippetsState = atom<Snippet[]>({
  key: "preview_snippets",
  default: [],
});

export const searchSnippetState = atom<Snippet[]>({
  key: "search_snippets",
  default: [],
});
