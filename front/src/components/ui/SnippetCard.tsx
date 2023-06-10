import toast from "react-hot-toast";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./Button";
import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import { BiCopy } from "react-icons/bi";
import { BsFiletypePng } from "react-icons/bs";

interface Props {
  title: string;
  code: string;
  isOpen?: boolean;
}

export const SnippetCard: React.FC<Props> = ({
  code,
  isOpen = false,
  title,
}) => {
  const [toggle, setToggle] = useState<boolean>(isOpen);

  const handleCopyMarkdownText = (text: string) => {
    if (!text) return;
    const filterToCopyCode = text.replace(/```/g, "");
    navigator.clipboard.writeText(filterToCopyCode);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="w-full shadow-2xl">
      <>
        <div className="flex items-center justify-between">
          <h2
            className="flex items-center space-x-2 font-bold cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <span>{title}</span>
            <div
              className={`transition-all duration-500 ${
                toggle ? "rotate-180" : "rotate-0"
              }`}
            >
              <IoIosArrowDropdownCircle className="text-2xl text-violet-400" />
            </div>
          </h2>
          <div className="flex space-x-1 items-center">
            <div className="tooltip tooltip-info" data-tip="soon">
              <Button
                type="button"
                icon={<BsFiletypePng />}
                variant="disabled"
                func={() => toast.error("Feature not available yet")}
              />
            </div>
            <div className="tooltip tooltip-info" data-tip="copy">
              <Button
                type="button"
                icon={<BiCopy />}
                variant="github"
                func={() => handleCopyMarkdownText(code)}
              />
            </div>
          </div>
        </div>
        <ReactMarkdown
          children={toggle ? code : code.slice(0, 100)}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <div className="hello">
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, "")}
                    style={atomDark}
                    language={match[1]}
                    PreTag="div"
                  />
                </div>
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
