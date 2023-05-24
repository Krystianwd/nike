import React from "react";

const NavItemContent = ({ data }) => {
  return Object.entries(data).map(([key, array]) => (
    <div className="NavItemContent-Container">
      <a key={key} href="">
        {key}
      </a>
      <div className="NavItemContent-SubContainer">
        {array.map((value) => (
          <a key={value} href="">
            {value}
          </a>
        ))}
      </div>
    </div>
  ));
};

export default NavItemContent;
