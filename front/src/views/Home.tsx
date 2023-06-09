import { AddSnippet } from "../components/form/AddSnippet";
import { Header } from "../components/layout/Header";
import { Main } from "../templates/Main";
import { MainContent } from "../templates/MainContent";

export const Home: React.FC = () => {
  return (
    <Main>
      <Header />
      <MainContent>
        <AddSnippet />
      </MainContent>
    </Main>
  );
};
