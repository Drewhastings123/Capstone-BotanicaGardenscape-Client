import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
  // const sessionToken = window.sessionStorage.getItem("Token");
  const sessionToken = "jksgjklsdhth";

  if (!sessionToken) {
    return <Navigate to="/Login" />;
  }

  return <Outlet />;
}
