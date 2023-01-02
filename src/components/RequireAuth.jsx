import { Outlet, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/state/authSlice";

const RequireAuth = ({ allowedRoles }) => {
  const user = useSelector(selectCurrentUser);
  console.log(user);

  //   const content = user ? <Outlet /> : <Navigate to='auth' replace />
  const content =
    user &&
    allowedRoles &&
    user.roles.some((role) => allowedRoles.includes(role)) ? (
      <Outlet />
    ) : (
      <Navigate to='auth' replace />
    );
  return content;
};

export default RequireAuth;
