import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const NewsDetailPage = () => {
  const params = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${params.newsId}`)
      .then(({ data }) => setData(data))
      .catch((err) => console.log(err));
  }, [params.newsId]);

  return (
    <>
      <h1>NewsDetailPage</h1>
      {data.id ? (
        <p>
          Hi!, My name is <strong>{data.name}</strong> and my id is{" "}
          <strong>{data.id}</strong>
        </p>
      ) : (
        <p>User with ID {params.newsId} is not found</p>
      )}

      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
    </>
  );
};
