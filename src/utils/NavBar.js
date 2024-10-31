import React from "react";

export function NavBar({bgColor}) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light d-none d-sm-block"
      style={{ background: bgColor }}>
        <ul className="navbar-nav justify-content-center ">
          <li className="nav-item px-4">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item px-4">
            <a className="nav-link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item px-4">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
          <li className="nav-item px-4">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <nav
        className="navbar navbar-expand-lg navbar-light d-sm-none d-flex col px-2"
        style={{ backgroundColor: bgColor}}
      >
        <a
          className="py-2"
          type="button"
          data-toggle="collapse"
          data-target="#smallNavBar"
          aria-controls="smallNavBar"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </a>

        <div className="collapse navbar-collapse" id="smallNavBar">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
