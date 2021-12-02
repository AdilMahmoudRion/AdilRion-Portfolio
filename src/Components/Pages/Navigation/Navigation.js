import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">Adil Mahmoud Rion</div>
        </div>

        <div className="nav-links">
          
          
          <HashLink  as={HashLink} to="/home#home"
          
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          >
            Home
          </HashLink>
          <HashLink as={HashLink} to="/home#about"
          scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }>
            About
          </HashLink>
          <HashLink  as={HashLink} to="/home#service" scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }>
            Service
          </HashLink>
          <HashLink  as={HashLink} to="home#projects" scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }>
            Portfolio
          </HashLink>
          <HashLink  as={HashLink} to="/home#blog" scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }>
            Blog
          </HashLink>
          <HashLink as={HashLink} to="/home#contact" scroll={(el) =>
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }>
            Contact
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
