import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconStyle from "../IconStyle/IconStyle";
import resumeData from "../../resumeData";

import "./Nav.css";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuFunction = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav role="navigation">
      <div id="toggleMenu">
        <input
          type="checkbox"
          checked={toggleMenu}
          onChange={toggleMenuFunction}
        />
        {IconStyle({ style: `${toggleMenu ? "close" : "hamburger"}` })}
        <img src={resumeData.logo} alt="logo" className="logo" />
        <ul id="navMenu">
          {resumeData.navLinks.map(links => {
            if (links.id <= 3) {
              return (
                <div key={links.id}>
                  <Link
                    to={links.to}
                    onClick={toggleMenuFunction}
                    className="menu-link"
                  >
                    <li
                      className={
                        !window.location.href.includes(`${links.name}`)
                          ? "active"
                          : "inactive"
                      }
                    >
                      <i className={links.icons} >
                        <span> {links.name}</span>
                      </i>
                    </li>
                  </Link>
                </div>
              );
            } else {
              return (
                <div key={links.id}>
                  <a href={links.to} target="blank" rel="noopener noreferrer">
                      <i className={links.icons} >
                        <span className="nav-resume"> {links.name}</span>
                      </i>
                  </a>
                </div>
              );
            }
          })}

          <div className="navContact">
            <i className={resumeData.contactSign}></i>
            <h2>{resumeData.contactTitle}</h2>
            {resumeData.socialLinks.map(contact => {
              return (
                <li key={contact.id}>
                  <div>
                    {contact.name}
                    <a
                      href={contact.url}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      <i className={contact.className} />
                    </a>
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
