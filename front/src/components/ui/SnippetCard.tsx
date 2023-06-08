import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./Button";

import { BiCopy } from "react-icons/bi";

interface Props {
  title: string;
  code: string;
}

export const SnippetCard: React.FC<Props> = ({ code, title }) => {
  const handleCopyMarkdownText = (text: string) => {
    if (!text) return;
    const filterToCopyCode = text.replace(/```/g, "");
    navigator.clipboard.writeText(filterToCopyCode);
  };

  return (
    <div className="w-full shadow-2xl">
      <>
        <div className="flex items-center justify-between">
          <h2 className="font-bold">{title}</h2>
          <Button
            type="button"
            icon={<BiCopy />}
            value="Copy"
            variant="github"
            func={() => handleCopyMarkdownText(code)}
          />
        </div>
        <ReactMarkdown
          children={code}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={atomDark}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </>
    </div>
  );
};
