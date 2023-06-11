import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Snippet } from "../../types/snippet/snippet.types";
import { Button } from "./Button";
import { useEffect, useState } from "react";

interface Props {
  snippetArray: Snippet[];
}

export const SideMenu: React.FC<Props> = ({ snippetArray }) => {
  const [showUpButton, setShowUpButton] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > window.innerHeight / 2) {
        setShowUpButton(true);
      } else {
        setShowUpButton(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        return;
      });
    };
  }, []);

  const handleLinkScroll = (
    event: React.MouseEvent<HTMLButtonElement>,
    section: string
  ): void => {
    event.preventDefault();
    const targetElementSection = document.getElementById(section);
    if (targetElementSection) {
      window.scrollTo({
        top: targetElementSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <ul className="flex flex-col space-y-2">
      {showUpButton && (
        <Button
          type="button"
          value="Back to top"
          icon={<BsFillArrowUpSquareFill className="text-xl" />}
          variant="primary"
          func={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
      )}
      {snippetArray.map((el) => (
        <li
          key={`menu-${el.id}`}
          className="transition-all font-bold cursor-pointer hover:text-violet-500"
        >
          <button
            onClick={(event) => handleLinkScroll(event, `snippet-${el.id}`)}
            className="text-left"
          >
            {el.title}
          </button>
        </li>
      ))}
    </ul>
  );
};

//onClick={(event: any) => handleLinkScroll(event, `snippet-${el.id}`)}
