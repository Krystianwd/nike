import React from "react";
import NavItemContent from "./NavItemContent";

const NavItem = ({ name, data }) => {
  return (
    <div>
      <div>
        <p>{name}</p>
      </div>
      <div className="NavItem-Container">
        <NavItemContent data={data} />
      </div>
    </div>
  );
};

export default NavItem;
