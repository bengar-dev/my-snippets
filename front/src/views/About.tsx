import { Header } from "../components/layout/Header";
import { Main } from "../templates/Main";
import { MainContent } from "../templates/MainContent";

export const About = () => {
  return (
    <Main>
      <Header />
      <MainContent>
        <div className="mt-8 flex flex-col gap-6 items-center justify-center w-1/2 mx-auto">
          <div className="w-full flex flex-col gap-2">
            <h1 className="first-letter:text-violet-400 text-4xl font-bold">
              My snippets is a web application that allows you to save your code
              snippets in a simple way.
            </h1>
            <p>
              This project was created with the intention of practicing the use
              of React, Typescript, Recoil, Tailwind.
            </p>
            <p>
              The application is still in{" "}
              <span className="font-bold">beta version</span>, so it is possible
              that you will find some bugs. If you find any, please report it to
              me on my github page/repo.{" "}
              <a
                href="https://github.com/bengar-dev/my-snippets"
                target="_blank"
                className="font-bold text-violet-400 hover:text-violet-500"
              >
                GitHub Repository
              </a>
            </p>
            <p>
              If you have any suggestions for improvement, please let me know.
            </p>
            <p>
              <span className="font-bold">
                Beta will run until the end of the year 2023
              </span>
              , then the application will be in production, but don't worry you
              will not loose your snippets. 😉
            </p>
            <h2 className="mt-6 text-2xl font-bold text-violet-300">
              1. Features
            </h2>
            <ul className="font-medium text-lg list-disc p-4">
              <li>GitHub Authentification ✅</li>
              <li>Logout route ✅</li>
              <li>Create snippet ✅</li>
              <li>Snippet card with syntax highlighting ✅</li>
              <li>Delete snippet ✅</li>
              <li>Copy code snippet button ✅</li>
              <li>Side menu to get an snippet's overview ✅</li>
              <li>Update UI for create snippet form</li>
              <li>Make the app responsive for mobil</li>
              <li>Possibilty to tag your snippet</li>
              <li>Research system by title and tags</li>
              <li>Organize snipets order</li>
              <li>Download .png snippet directly</li>
              <li>User custom settings like Syntax highlight</li>
              <li>Creating Landing page</li>
              <li>Find Offers plan</li>
              <li>🚀 Run in production the app !</li>
            </ul>
            <h2 className="mt-6 text-2xl font-bold text-violet-300">
              2. Backend stack
            </h2>
            <ul className="font-medium text-lg list-disc p-4">
              <li>Node 18.x</li>
              <li>Express</li>
              <li>TypeScript</li>
              <li>Prisma</li>
              <li>passport</li>
              <li>jsonwebtoken</li>
              <li>MongoDB</li>
            </ul>
            <h2 className="mt-6 text-2xl font-bold text-violet-300">
              3. Frontend stack
            </h2>
            <ul className="font-medium text-lg list-disc p-4">
              <li>React + Vite</li>
              <li>TypeScript</li>
              <li>Recoil</li>
              <li>Tailwind</li>
              <li>@tanstack/react-query</li>
              <li>axios</li>
              <li>react-router-dom</li>
              <li>react-syntax-highlighter</li>
              <li>react-hook-form + yup</li>
            </ul>
          </div>
        </div>
      </MainContent>
    </Main>
  );
};
