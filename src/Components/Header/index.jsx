import React from "react";
import { NavLink } from "react-router-dom";
import { Links } from "./Links";

const Header = () => {
  return (
    <>
      <div className="navigation-bar">
        <nav>
          <ul>
            {Links.map((link, i) => {
              return (
                <li key={i}>
                  <NavLink to={link.to}>{link.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
