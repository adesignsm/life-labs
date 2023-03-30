import React, {useState} from "react";
import $ from "jquery";

import { NavLink } from "react-router-dom";
import { Links } from "./Links";

import "./index.css";

const Header = () => {

  const toggleVisibility = (e) => {
      if (e.target.id === "about-nav") {
          if ($(".about-container").css("display") === "none") {
            $(".about-container").fadeIn(100);
            $(".about-container").css("display", "flex");
          } else {
            $(".about-container").fadeOut(100);
          }
      }
  }

  return (
    <>
      <div className="navigation-bar">
        <nav>
          <ul>
            {Links.map((link, i) => {
              return (
                <div className="navigation-item">
                  <li key={i}>
                    <NavLink id={link.id} to={link.to} onClick={(e) => {toggleVisibility(e)}}>{link.name}</NavLink>
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
