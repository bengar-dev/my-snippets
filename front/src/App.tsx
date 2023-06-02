import { Route, Routes } from "react-router-dom";
import { SignIn } from "./views/SignIn";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>home hello</div>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}
