import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>My Learning Website</h1>
    </header>
  );
};

const headerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px 0",
  textAlign: "center",
};

export default Header;
