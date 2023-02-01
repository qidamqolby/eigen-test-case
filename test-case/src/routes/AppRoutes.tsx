import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutProvider from "../layouts/Layout";
import HomePage from "../pages/home/Home";
import DetailPage from "../pages/newsDetail/Detail";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutProvider content={<HomePage />} />} />
          <Route
            path="/news/:name"
            element={<LayoutProvider content={<DetailPage />} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
