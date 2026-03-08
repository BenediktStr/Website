import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [activelink, setActivelink] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

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
          <a
            href="#home"
            className={`nav-link ${activelink === "home" ? "active" : ""}`}
            onClick={() => setActivelink("home")}
          >
            Home
          </a>
          <a
            href="#blog"
            className={`nav-link ${activelink === "blog" ? "active" : ""}`}
            onClick={() => setActivelink("blog")}
          >
            Blog
          </a>
          <a
            href="#contact"
            className={`nav-link ${activelink === "contact" ? "active" : ""}`}
            onClick={() => setActivelink("contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
