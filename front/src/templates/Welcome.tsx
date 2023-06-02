interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Welcome: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-violet-950">
      {children}
    </div>
  );
};
