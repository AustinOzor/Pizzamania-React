import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-default navhead">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand companyname" href="home">OZOS PIZZA </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right navmenu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#pizza">Pizza Type</a></li>
            <li><a href="#branches">Our Branches</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;