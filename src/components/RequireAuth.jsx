import { useEffect } from "react";

import { Outlet, Navigate, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/state/authSlice";

const RequireAuth = () => {
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  // const content = user ? <Outlet /> : <Navigate to='auth' replace />;
  // return content;
  return <Outlet />;
};

export default RequireAuth;
