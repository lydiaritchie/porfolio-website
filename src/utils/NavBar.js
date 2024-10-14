import React from "react";

export function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light bg-light d-none d-sm-block">
        <ul class="navbar-nav justify-content-center ">
          <li class="nav-item px-4">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <nav className=" d-sm-block d-sm-none">small nav bar</nav>
    </div>
  );
}
