import { Language } from "../language/language.types";

export type Snippet = {
  id: string;
  title: string;
  code: string;
  languageId: string;
  userId: string;
  language?: Language;
};
