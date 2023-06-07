interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Main: React.FC<Props> = ({ children }) => {
  return <div className="relative">{children}</div>;
};
