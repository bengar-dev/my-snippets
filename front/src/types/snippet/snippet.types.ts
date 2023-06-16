import { Language } from "../language/language.types";

export type Snippet = {
  id?: string;
  title: string;
  code: string;
  languageId: string;
  userId?: string;
  language?: Language;
  SnippetsTag?: SnippetTag[];
};

export type SnippetTag = {
  snippetsId: string;
  tagId: string;
  Tag: Tag;
};

export type Tag = {
  name: string;
  active?: boolean;
};

export type InputSnippet = {
  title: string;
  code: string;
  languageId: string;
  tagName?: string;
};
