interface Props {
  children: JSX.Element | JSX.Element[];
}

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <footer className="w-full text-xl bg-violet-950 fixed bottom-0 h-12 flex space-x-2 items-center justify-center text-violet-200 font-bold">
        <span>copyright 2023 &copy; Made with ❤️ by</span>
        <a
          href="https://benoitgarcia.dev"
          target="_blank"
          className="text-white hover:text-violet-500 transition-all"
        >
          Benoit Garcia
        </a>
      </footer>
    </div>
  );
};
