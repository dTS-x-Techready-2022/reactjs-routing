import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthentication = () => {
  const isAuthenticated = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/dashboard");
    }
  }, []);

  return isAuthenticated;
};
