import { Route, Routes, useNavigate } from "react-router-dom";
import { AutheticationLayout } from "../components/layout";

const DashbiardAdmin = () => {
  return (
    <AutheticationLayout>
      <h1>Ini Admin</h1>
    </AutheticationLayout>
  );
};

export const Dashboard = () => {
  const navigate = useNavigate();

  const goTo = (e) => {
    const value = e.target.value;
    if (e.code === "Enter") {
      if (value === "admin") {
        navigate("/dashboard/admin");
      } else {
        navigate("/dashboard/customers");
      }
      e.target.value = "";
    }
  };

  return (
    <div>
      <h1>Navbar Custom</h1>

      <input onKeyDown={goTo} />

      <Routes>
        <Route path="admin" element={<DashbiardAdmin />} />
        <Route
          path="customers"
          element={
            <>
              <h1>Ini Customers</h1>
            </>
          }
        />
      </Routes>
    </div>
  );
};
