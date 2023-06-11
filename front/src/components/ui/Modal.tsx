import { BiTrash } from "react-icons/bi";
import { Button } from "./Button";

interface Props {
  children: JSX.Element | JSX.Element[];
  id: string;
  buttonValue?: string;
  title?: string;
  func?: () => void;
}

export const Modal: React.FC<Props> = ({
  id,
  buttonValue,
  children,
  func,
  title,
}) => {
  return (
    <dialog id={id} className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <div className="flex justify-end">
          <Button
            type="button"
            value={buttonValue}
            variant="delete"
            icon={<BiTrash />}
            func={() => {
              if (func) {
                func();
              }
            }}
          />
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

{
  /* <button className="btn" onClick={()=>window.my_modal_2.showModal()}>open modal</button> */
}
