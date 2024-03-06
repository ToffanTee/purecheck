import { Navigate } from "react-router-dom";

const ProtectedRoutes = (props) => {
  if (!props.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
};

export default ProtectedRoutes;
