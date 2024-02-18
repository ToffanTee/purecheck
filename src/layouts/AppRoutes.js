import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../components/AuthComponents/Login";
import Register from "../components/AuthComponents/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
