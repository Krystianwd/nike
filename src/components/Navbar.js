import React from "react";
import NavItem from "./NavItem";
import {
  NowePolecane,
  Mezczyzni,
  Kobiety,
  Dzieci,
  Wyprzedaz,
} from "../data/data";
import { useState } from "react";
const Navbar = () => {
  const [data, setData] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <div
      className="Navbar-Container"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src="nike-logo.png" alt="jodran-logo" width="100" height="100" />
      <div className="Navbar-Href-Container">
        <p
          onMouseOver={() => {
            setData(NowePolecane);
            handleMouseOver();
          }}
          onMouseOut={handleMouseOut}
        >
          Nowe I polecane
        </p>
        <p
          onMouseOver={() => {
            setData(Mezczyzni);
            handleMouseOver();
          }}
          onMouseOut={handleMouseOut}
        >
          Mężczyźni
        </p>
        <p
          onMouseOver={() => {
            setData(Kobiety);
            handleMouseOver();
          }}
          onMouseOut={handleMouseOut}
        >
          Kobiety
        </p>
        <p
          onMouseOver={() => {
            setData(Dzieci);
            handleMouseOver();
          }}
          onMouseOut={handleMouseOut}
        >
          Dzieci
        </p>
        <p
          onMouseOver={() => {
            setData(Wyprzedaz);
            handleMouseOver();
          }}
          onMouseOut={handleMouseOut}
        >
          Wyprzedaż
        </p>
      </div>
      {isHovering ? <NavItem data={data} /> : ""}
    </div>
  );
};

export default Navbar;
