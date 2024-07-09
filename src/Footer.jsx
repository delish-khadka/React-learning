import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 My Learning Website</p>
    </footer>
  );
};

const footerStyle = {
  background: "#333",
  color: "#fff",
  padding: "10px 0",
  textAlign: "center",
  position: "fixed",
  width: "100%",
  bottom: "0",
};

export default Footer;
