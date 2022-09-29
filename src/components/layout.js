import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AutheticationLayout = ({ children }) => {
  const navigate = useNavigate();
  const isAuthencated = new Promise((resolve, reject) => {
    reject("unauthenticated");
    // setTimeout(() => {
    //   resolve();
    // }, 500);
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    isAuthencated
      .then(() => setLoading(false))
      .catch((err) => navigate("/dashboard"));
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return <>{children}</>;
};
