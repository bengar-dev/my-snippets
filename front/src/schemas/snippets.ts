import * as yup from "yup";

export const addSnippetSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  code: yup.string().required("Snippet code is required"),
  languageId: yup.string().required("Language is required"),
});
