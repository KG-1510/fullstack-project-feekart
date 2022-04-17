/* eslint-disable no-unused-vars */
import { useCookies } from "react-cookie";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["isAuth"]);
  const isAuth = cookies.isAuth;
  return isAuth ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};

export default ProtectedRoute;
