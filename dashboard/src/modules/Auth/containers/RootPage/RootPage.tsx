import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../LoginPage";

export const RootPage = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LoginPage />} />
    </Routes>
  );
};
