import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../sections";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
