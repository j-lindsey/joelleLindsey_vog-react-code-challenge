import React from "react";
import "./header.css";

const Header = ({ title, image }) => {
  return (
    <div className="header_container" style={{ backgroundImage: `url(${image})` }}>
      <h1 className="header_title">{title}</h1>
    </div>
  );
};

export default Header;
