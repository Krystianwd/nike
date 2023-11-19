import React from "react";

const NavItem = ({ name, data }) => {
  return (
    <div className="NavTable-Container">
      <div className="NavItem-Container">
        {Object.entries(data).map(([key, array]) => (
          <div className="NavItemColumn">
            <div className="NavTableColItem" id="NavItemKey" key={key}>
              {key}
            </div>
            {array.map((value) => (
              <div className="NavTableColItem" id="NavItemValue" key={value}>
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavItem;
