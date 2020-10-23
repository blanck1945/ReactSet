import * as React from "react";
import "./navbar.scss";

const Navbar: React.FunctionComponent = () => {
  return (
    <div className="navbar">
      <div className="logo-div">
        <h1>ReactSet</h1>
        <h3>React with SuperPowers</h3>
      </div>
      <div className="info-div">
        <a href="https://github.com/blanck1945/ReactSet" className="link">
          Github
        </a>
        <a href="#" className="link">
          Docs
        </a>
      </div>
    </div>
  );
};

export default Navbar;
