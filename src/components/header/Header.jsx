import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="header">
        <div className="user">
          <img
            src="/Profil.png"
            alt="Profilbild von Benedikt Sträußl"
            className="profilpicture"
          />
          <div className="userName">
            <p className="name">Benedikt Sträußl</p>
            <p className="time">{currentTime.toLocaleTimeString("de-DE")}</p>
          </div>
        </div>
        <div className="list">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`nav-link ${location.pathname === "/blog" ? "active" : ""}`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
