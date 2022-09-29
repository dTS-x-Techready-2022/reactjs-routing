import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <>
      <h1>AboutPage</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/news">News</Link>
      <br />
      <Link to="/profile">Profile</Link>
    </>
  );
};
