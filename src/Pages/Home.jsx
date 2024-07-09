import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Welcome to My Learning Website</h2>
      <p>This is a simple website layout with a header and footer.</p>
      <Link to="/practice">
        <button>Go to Practice Page 2</button>
      </Link>
    </div>
  );
};

export default Home;
