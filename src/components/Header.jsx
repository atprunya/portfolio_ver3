import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="site-title">atprunya</div>
        <nav className="site-nav">
          <a href="#aboutme">About Me</a>
          <a href="#career">Career</a>
          <a href="#achievements">Achievements</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#social">Social</a>
        </nav>
      </div>
    </header>
  );
}

