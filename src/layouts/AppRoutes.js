import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
import HomePage from "../pages/HomePage";
import Login from "../components/AuthComponents/Login";
import Register from "../components/AuthComponents/Register";
import AuthPage from "../pages/AuthPage";
import ErrorPage from "../pages/ErrorPage";
import BlogPage from "../pages/BlogPage";
import ContactUsPage from "../pages/ContactUsPage";
import AccountVerification from "../components/AuthComponents/AccountVerification";
// import AdminPage from "../pages/AdminPage";
import ProtectedRoutes from "./ProtectedRoutes";
import VerificationPage from "../pages/VerificationPage";
import CommunityPage from "../pages/CommunityPage";
import CreateBlogsPage from "../pages/CreateBlogsPage";
import SingleBlogPage from "../pages/SingleBlogPage";
import LoadingIndicator from "../helpers/LoadingIndicator";

const AdminPage = lazy(() => import("../pages/AdminPage"));

const AppRoutes = () => {
  const { user } = useSelector((state) => state.userState);

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />

      <Route path="/" element={<HomePage />} />

      <Route path="/" element={<AuthPage />}>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<Register />} />
        <Route path="verify-account" element={<AccountVerification />} />
      </Route>

      <Route path="/blog" element={<BlogPage />} />

      <Route path="/admin/blogs-create" element={<CreateBlogsPage />} />

      <Route path="/blogs/:title" element={<SingleBlogPage />} />

      <Route path="/community" element={<CommunityPage />} />

      <Route path="/contactus" element={<ContactUsPage />} />

      <Route path="/verify-product" element={<VerificationPage />} />

      {/* {user && (
        <Route
          path="/admin"
          element={
            <ProtectedRoutes user={user}>
              <AdminPage />
            </ProtectedRoutes>
          }
        ></Route>
      )} */}

      <Route
        path="/admin"
        element={
          <Suspense fallback={<LoadingIndicator />}>
            <ProtectedRoutes user={user}>
              <AdminPage />
            </ProtectedRoutes>
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
