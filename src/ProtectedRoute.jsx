import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const token = "useSelector((state) => state.user.token)";

  // console.log("token ===>", token);

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
