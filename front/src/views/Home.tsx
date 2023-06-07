import { Header } from "../components/layout/Header";
import { Main } from "../templates/Main";
import { MainContent } from "../templates/MainContent";

export const Home: React.FC = () => {
  return (
    <Main>
      <Header />
      <MainContent>
        <p>Home content</p>
      </MainContent>
    </Main>
  );
};
