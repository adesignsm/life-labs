import React from "react";
import { NavLink } from "react-router-dom";
import { Links } from "./Links";

import "./index.css";

const Header = () => {
  return (
    <>
      <div className="navigation-bar">
        <nav>
          <ul>
            {Links.map((link, i) => {
              return (
                <div className="navigation-item">
                  <li key={i}>
                    <NavLink to={link.to}>{link.name}</NavLink>
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
