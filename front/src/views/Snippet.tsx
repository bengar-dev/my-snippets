import { useRecoilState } from "recoil";
import { Header } from "../components/layout/Header";
import { Main } from "../templates/Main";
import { MainContent } from "../templates/MainContent";
import { previewSnippetsState, snippetsState } from "../atoms/snippets.atoms";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { SnippetCard } from "../components/ui/SnippetCard";
import { SideMenu } from "../components/ui/SideMenu";

export const Snippet: React.FC = () => {
  const params = useParams();
  const [snippet] = useRecoilState(snippetsState);
  const [preview, setPreview] = useRecoilState(previewSnippetsState);

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
  }, [snippet, preview, params.name, setPreview]);

  return (
    <Main>
      <Header />
      <MainContent>
        <div className="fixed w-1/6 pl-4">
          <SideMenu snippetArray={preview} />
        </div>
        <div className="mt-8 flex flex-col gap-6 items-center justify-center w-1/2 mx-auto">
          {preview.map((el) => (
            <SnippetCard
              key={el.id}
              id={el.id}
              code={el.code}
              title={el.title}
              lengthArray={preview.length}
            />
          ))}
        </div>
      </MainContent>
    </Main>
  );
};
