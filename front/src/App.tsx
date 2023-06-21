import { Route, Routes, useNavigate } from "react-router-dom";
import { SignIn } from "./views/SignIn";
import { Home } from "./views/Home";
import { Snippet } from "./views/Snippet";
import { About } from "./views/About";
import { Search } from "./views/Search";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function App() {
  const cookie = Cookies.get("utk");
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie) {
      navigate("/signin");
    }
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/snippet/:name" element={<Snippet />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}
