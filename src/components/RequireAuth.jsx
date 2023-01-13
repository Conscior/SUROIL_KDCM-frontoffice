import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/state/authSlice";

const RequireAuth = () => {
  const user = useSelector(selectCurrentUser);

  const content = user ? <Outlet /> : <Navigate to='auth' replace />;
  return content;
};

export default RequireAuth;
