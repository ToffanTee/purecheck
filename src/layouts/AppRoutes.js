import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../components/AuthComponents/Login";
import Register from "../components/AuthComponents/Register";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../pages/ErrorPage";
import BlogPage from "../pages/BlogPage";
import ContactUsPage from "../pages/ContactUsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />

      <Route path="/" element={<HomePage />} />

      <Route path="/" element={<AuthPage />}>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
      </Route>

      <Route path="/blog" element={<BlogPage />} />

      <Route path="/contactus" element={<ContactUsPage />} />
    </Routes>
  );
};

export default AppRoutes;
