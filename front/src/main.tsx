import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter } from "react-router-dom";

import App from "./App.tsx";

import "./styles/index.css";
import "./styles/fonts.css";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <RecoilRoot>
      <HashRouter>
        <App />
      </HashRouter>
    </RecoilRoot>
  </QueryClientProvider>
);
