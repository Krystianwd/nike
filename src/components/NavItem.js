import React from "react";

const NavItem = ({ name, data }) => {
  return (
    <div className="NavItem-Container">
      {/* <p>{name}</p> */}
      {Object.entries(data).map(([key, array]) => (
        <div className="NavItemContent-Container">
          <a key={key} href="">
            {key}
          </a>
          <div className="NavItemContent-SubContainer">
            {array.map((value) => (
              <a key={value} href="">
                {value}
              </a>
            ))}{" "}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavItem;
