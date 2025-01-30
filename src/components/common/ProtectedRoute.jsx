import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../../firebase/firebase";

const ProtectedRoute = () => {
    const user = auth.currentUser;

    return user ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;