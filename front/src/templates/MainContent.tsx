interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MainContent: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 pt-20">
      <nav className="w-full bg-red-500">hello</nav>
      {children}
    </div>
  );
};
