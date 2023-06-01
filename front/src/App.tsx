import { useCallback, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

export default function App() {
  const navigate = useNavigate();
  const isAuth = useCallback(() => Boolean(Cookies.get("utk")), []);

  useEffect(() => {
    if (!isAuth) {
      navigate("/signin");
    }
  }, [isAuth, navigate]);

  return (
    <>
      {isAuth() ? (
        <Routes>
          <Route path="/" element={<div>home hello</div>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/signin" element={<div>signin</div>} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      )}
    </>
  );
}
