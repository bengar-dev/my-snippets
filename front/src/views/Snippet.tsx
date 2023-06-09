import { useRecoilState } from "recoil";
import { Header } from "../components/layout/Header";
import { Main } from "../templates/Main";
import { MainContent } from "../templates/MainContent";
import { snippetsState } from "../atoms/snippets.atoms";
import { useEffect, useState } from "react";
import { Snippet as SnippetType } from "../types/snippet/snippet.types";
import { useParams } from "react-router-dom";
import { SnippetCard } from "../components/ui/SnippetCard";

export const Snippet: React.FC = () => {
  const params = useParams();
  const [snippet] = useRecoilState(snippetsState);
  const [preview, setPreview] = useState<SnippetType[]>([]);

  /**
   * si snippet a des données et que preview est vide alors
   */

  useEffect(() => {
    if (snippet.length > 0 && preview.length === 0) {
      setPreview(snippet.filter((el) => el.language?.logo === params.name));
    } else if (
      snippet.length > 0 &&
      preview.length > 0 &&
      preview[0].language?.logo !== params.name
    ) {
      setPreview(snippet.filter((el) => el.language?.logo === params.name));
    }
  }, [snippet, preview, params.name]);

  return (
    <Main>
      <Header />
      <MainContent>
        <div className="mt-8 flex flex-col gap-6 items-center justify-center w-1/2 mx-auto">
          {preview.map((el) => (
            <SnippetCard key={el.id} code={el.code} title={el.title} />
          ))}
        </div>
      </MainContent>
    </Main>
  );
};
