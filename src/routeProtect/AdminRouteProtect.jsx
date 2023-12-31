import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminRouteProtect = (props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
    if (isLoggedIn) {
      navigate("/admin", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return props.children;
};

export default AdminRouteProtect;
