import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/dashboard">Dashboard</Link>
      <br />
      <Link to="/profile">Profile</Link>
    </>
  );
};
