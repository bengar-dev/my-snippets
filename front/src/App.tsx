import { Route, Routes } from "react-router-dom";
import { SignIn } from "./views/SignIn";
import { Home } from "./views/Home";
import { Snippet } from "./views/Snippet";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/snippet/:name" element={<Snippet />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}
