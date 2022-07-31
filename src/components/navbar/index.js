import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGraduationCap,
  faEnvelopesBulk, faBars, faClose
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

import "./navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [activeLink, location.pathname]);

  return (
    <nav className="nav">
      <div className={toggleMenu ? "navbar show-nav" : "navbar nav_hidden"}>
        <ul>
          <li>
            <NavLink
              className={
                activeLink === "/" ? "nav_link nav_link_active" : "nav_link"
              }
              to="/"
              replace
            >
              <FontAwesomeIcon
                className={
                  activeLink === "/"
                    ? "nav_link_icon nav_link_active"
                    : "nav_link_icon"
                }
                icon={faHouse}
              />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                activeLink === "/universities"
                  ? "nav_link nav_link_active"
                  : "nav_link"
              }
              to="/universities"
              replace
            >
              <FontAwesomeIcon
                className={
                  activeLink === "/universities"
                    ? "nav_link_icon nav_link_active"
                    : "nav_link_icon"
                }
                icon={faGraduationCap}
              />
              Universities
            </NavLink>
          </li>
          <li>
            <NavLink
              className={
                activeLink === "/postal"
                  ? "nav_link nav_link_active"
                  : "nav_link"
              }
              to="/postal"
              replace
            >
              <FontAwesomeIcon
                className={
                  activeLink === "/postal"
                    ? "nav_link_icon nav_link_active"
                    : "nav_link_icon"
                }
                icon={faEnvelopesBulk}
              />
              Postal Lookup
            </NavLink>
          </li>
        </ul>
      </div>
      <button
        className="nav_collapse"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        {toggleMenu ? (
          <FontAwesomeIcon icon={faBars} />
        ) : (
          <FontAwesomeIcon icon={faClose} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
