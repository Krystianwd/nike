import React from "react";
import NavItem from "./NavItem";
import { NowePolecane } from "../data/data";
const Navbar = () => {
  console.log(NowePolecane);
  return (
    <div className="Navbar-Container">
      <img src="nike-logo.png" alt="jodran-logo" width="50" height="50" />
      <div className="Navbar-Href-Container">
        <NavItem name="Nowe i polecane" data={NowePolecane} />
        <NavItem name="Mężczyźni" data={NowePolecane} />
        <NavItem name="Kobiety" data={NowePolecane} />
        <NavItem name="Dzieci" data={NowePolecane} />
        <NavItem name="Wyprzedaż" data={NowePolecane} />
      </div>
    </div>
  );
};

export default Navbar;
