import toast from "react-hot-toast";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "./Button";
import { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

import { BiCopy, BiTrash } from "react-icons/bi";
import { useDeleteSnipper } from "../../hooks/snippets/useDeleteSnippet";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { previewSnippetsState } from "../../atoms/snippets.atoms";
import { Modal } from "./Modal";

interface Props {
  title: string;
  code: string;
  lengthArray: number;
  id?: string;
}

export const SnippetCard: React.FC<Props> = ({
  id,
  code,
  title,
  lengthArray,
}) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState<boolean>(true);
  const { mutateAsync } = useDeleteSnipper();
  const [preview, setPreview] = useRecoilState(previewSnippetsState);

  const handleCopyMarkdownText = (text: string) => {
    if (!text) return;
    const filterToCopyCode = text.replace(/```/g, "");
    navigator.clipboard.writeText(filterToCopyCode);
    toast.success("Copied to clipboard");
  };

  const handleOpenModal = (id?: string) => {
    if (!id) return;
    // function from daisyUi
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    window[`modal-${id}`].showModal();
  };

  const handleDeleteSnippet = () => {
    if (!id) return;
    toast.promise(mutateAsync(id), {
      loading: "Deleting snippet...",
      success: "Snippet deleted",
      error: "Error while deleting snippet",
    });
    if (lengthArray - 1 === 0) {
      navigate("/");
    } else {
      setPreview(preview.filter((el) => el.id !== id));
    }
  };

  return (
    <div className="w-full shadow-2xl">
      <>
        <Modal
          id={`modal-${id}`}
          title="Delete Snippet"
          buttonValue="Confirm Delete"
          func={handleDeleteSnippet}
        >
          <p className="my-4">
            Are you sure to delete <span className="font-bold">{title}</span>{" "}
            snippet ?
          </p>
        </Modal>
        <div className="flex items-center justify-between">
          <h2
            id={`snippet-${id}`}
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
            {/* <Button
              type="button"
              icon={<BsFiletypePng />}
              variant="disabled"
              func={() => toast.error("Feature not available yet")}
            /> */}
            <div className="tooltip" data-tip="copy">
              <Button
                type="button"
                icon={<BiCopy />}
                variant="github"
                func={() => handleCopyMarkdownText(code)}
              />
            </div>
            <div className="tooltip tooltip-error" data-tip="delete">
              <Button
                type="button"
                icon={<BiTrash />}
                variant="delete"
                func={() => handleOpenModal(id)}
              />
            </div>
          </div>
        </div>
        <div className="mt-2 mockup-window border border-violet-800 bg-violet-900">
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
                      style={a11yDark}
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
        </div>
      </>
    </div>
  );
};
