import { useRecoilState } from "recoil";
import { Header } from "../components/layout/Header";
import { Main } from "../templates/Main";
import { MainContent } from "../templates/MainContent";
import { searchSnippetState } from "../atoms/snippets.atoms";
import { SnippetCard } from "../components/ui/SnippetCard";
import { SideMenu } from "../components/ui/SideMenu.tsx";

export const Search = () => {
  const [searchSnipets] = useRecoilState(searchSnippetState);

  return (
    <Main>
      <Header />
      <MainContent>
        {searchSnipets.length > 0 ? (
          <div className="fixed w-1/6 pl-4">
            <SideMenu snippetArray={searchSnipets} />
          </div>
        ) : (
          <></>
        )}
        <div className="mt-8 flex flex-col gap-6 items-center justify-center w-1/2 mx-auto">
          {searchSnipets.length > 0 ? (
            searchSnipets.map((el) => (
              <SnippetCard
                key={el.id}
                id={el.id}
                code={el.code}
                title={el.title}
                lengthArray={searchSnipets.length}
                tags={el.SnippetsTag || []}
              />
            ))
          ) : (
            <span className="font-bold">No results for your search</span>
          )}
        </div>
      </MainContent>
    </Main>
  );
};
