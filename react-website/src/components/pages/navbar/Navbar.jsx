import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "../../elements/button/Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
            בנין G1
          </Link>
          <div className="menu-icon" onClick={() => setClick(!click)}>
            {/* <i id={click ? "nav-icon3" : "open"} /> */}
            <div id="nav-icon3" className={click ? "open" :"close"}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                אודות
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                שירותים
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                כניסה
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">כניסה</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
