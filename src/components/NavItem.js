import React from "react";
import { useState } from "react";
import NavItemContent from "./NavItemContent";

const NavItem = ({ name, data }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div>
        <p>{name}</p>
      </div>
      <div className="NavItem-Container">
        <p> {isHovering ? <NavItemContent data={data} /> : ""}</p>
      </div>
    </div>
  );
};

export default NavItem;
