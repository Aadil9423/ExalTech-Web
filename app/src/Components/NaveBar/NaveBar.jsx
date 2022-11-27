import React, { useState } from "react";
import { FiYoutube, FiFacebook, FiInstagram } from "react-icons/fi";
import "./NaveBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
const NaveBar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      {/* <h1>Thsi is NaveBare Components</h1> */}
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>E</span>xal
            <span>T</span>echs
          </h2>
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          {/* <ul>
            <li>
              <a to="/">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul> */}
        </div>
        {/* <div className="social-media">
          <ul className="social-media-dsktop">
            <li>
              <a>
                <FiYoutube className="youtube" />
              </a>
            </li>
            <li>
              <a>
                <FiFacebook className="facebook" />
              </a>
            </li>
            <li>
              <a>
                <FiInstagram className="instagram" />
              </a>
            </li>
          </ul>
        </div> */}
        <div className="hamburger-menu">
          <a onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NaveBar;
