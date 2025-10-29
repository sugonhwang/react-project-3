import React from "react";
import ProductDetail from "../pages/ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth }) => {
  return auth === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
