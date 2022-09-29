import { Link } from "react-router-dom";

export const ProfilePage = () => {
  return (
    <>
      <h1>ProfilePage</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </>
  );
};
