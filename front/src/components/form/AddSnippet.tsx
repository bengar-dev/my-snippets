import toast from "react-hot-toast";
import { AiOutlineSave } from "react-icons/ai";
import { useGetLanguages } from "../../hooks/languages/useGetLanguages";
import { Button } from "../ui/Button";
import { InputSelect } from "./inputs/InputSelect";
import { InputValue } from "./inputs/InputValue";
import { InputTextArea } from "./inputs/InputTextArea";
import { Controller, useForm } from "react-hook-form";
import { addSnippetSchema } from "../../schemas/snippets";
import { yupResolver } from "@hookform/resolvers/yup";
import { Snippet } from "../../types/snippet/snippet.types";
import { useCreateSnippet } from "../../hooks/snippets/useCreateSnippet";

export const AddSnippet: React.FC = () => {
  const { data: languages } = useGetLanguages();
  const { mutateAsync, isLoading } = useCreateSnippet();

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      code: "",
      languageId: "",
    },
    resolver: yupResolver(addSnippetSchema),
  });

  const onSubmit = async (data: Snippet) => {
    toast.promise(mutateAsync(data), {
      loading: "Loading",
      success: "Snippet add successfully",
      error: "Error while adding snippet",
    });
    reset();
  };

  return (
    <form
      className="mt-8 flex flex-col gap-6 items-center justify-center w-1/2 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl font-bold first-letter:text-violet-500">
        Memorize your snippet
      </h1>
      {languages?.data && languages.data.length > 0 && (
        <>
          <div className="w-full flex items-center space-x-2">
            <div className="w-2/3">
              <Controller
                name="title"
                control={control}
                render={({ field }) => (
                  <InputValue type="text" label="Title" field={field} />
                )}
              />
            </div>
            <div className="w-1/3">
              <Controller
                name="languageId"
                control={control}
                render={({ field }) => (
                  <InputSelect
                    defaultValues="Select a language"
                    label="Language"
                    values={languages.data.sort((a, b) => {
                      if (a.name < b.name) return -1;
                      if (a.name > b.name) return 1;
                      return 0;
                    })}
                    field={field}
                  />
                )}
              />
            </div>
          </div>

          <Controller
            name="code"
            control={control}
            render={({ field }) => (
              <InputTextArea label="Snippet" field={field} />
            )}
          />

          <div className="w-full flex justify-end">
            <Button
              type="submit"
              value="Save"
              icon={<AiOutlineSave className="text-xl" />}
              loading={isLoading}
            />
          </div>
        </>
      )}
    </form>
  );
};
