import { Button } from "../components/ui/Button";
import { useGetSnippets } from "../hooks/snippets/useGetSnippets";
import { Snippet } from "../types/snippet/snippet.types";
import { Language } from "../types/language/language.types";

import { VscTerminalBash } from "react-icons/vsc";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaDocker, FaJava, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MainContent: React.FC<Props> = ({ children }) => {
  const { data: snippets } = useGetSnippets();
  const navigate = useNavigate();
  const params = useParams();

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 py-20">
      <nav className="px-6 w-full h-20 flex space-x-4 items-center justify-end">
        <Button
          type="button"
          icon={<AiOutlinePlusCircle />}
          value="Add new snippet"
          variant="primary"
          func={() => navigate("/")}
        />
        {reduceLanguageArray(snippets?.data).map((language) => (
          <Button
            key={language.id}
            type="button"
            value={language.name}
            variant="outline-primary"
            icon={handleLanguageIcons(language)}
            func={() => navigate(`/snippet/${language.name.toLowerCase()}`)}
            active={isSelectLanguage(language.name.toLowerCase(), params.name)}
          />
        ))}
      </nav>
      {children}
    </div>
  );
};

function isSelectLanguage(snippetName: string, urlParams?: string): boolean {
  return Boolean(snippetName === urlParams);
}

function reduceLanguageArray(snippets?: Snippet[]): Language[] {
  if (!snippets) return [];
  const languages: Language[] = [];
  snippets.forEach((snippet) => {
    if (!languages.find((language) => language.id === snippet.language?.id)) {
      languages.push(snippet.language as Language);
    }
  });
  return languages;
}

function handleLanguageIcons(language: Language) {
  switch (language.logo) {
    case "docker":
      return <FaDocker />;
    case "java":
      return <FaJava />;
    case "python":
      return <FaPython />;
    case "jsx":
      return <FaReact />;
    case "typescript":
      return <SiTypescript />;
    case "javascript":
      return <SiJavascript />;
    case "bash":
      return <VscTerminalBash />;
    case "php":
      return <FaPhp />;
  }
}
