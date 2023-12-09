import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootPage as AuthModule } from "@/modules/Auth";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/*"} element={<AuthModule />} />
      </Routes>
    </BrowserRouter>
  );
};
