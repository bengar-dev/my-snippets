import Background from "../../assets/bg_signin.jpg";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const BlockSign: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-2/3 flex rounded shadow-xl">
      <div className="w-1/3 bg-white rounded-tl rounded-bl flex flex-col items-center justify-center p-4 text-slate-950">
        {children}
      </div>
      <div className="w-2/3">
        <img src={Background} className="rounded-tr rounded-br" />
      </div>
    </div>
  );
};
