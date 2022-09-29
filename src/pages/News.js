import { Link, Outlet } from "react-router-dom";

export const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <Outlet />
    </>
  );
};
