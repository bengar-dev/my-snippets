import { Header } from "../components/layout/Header";
import { Main } from "../templates/Main";

export const Home: React.FC = () => {
  return (
    <Main>
      <Header />
      <p>hello main home</p>
    </Main>
  );
};
