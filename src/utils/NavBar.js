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





      <nav class="navbar navbar-expand-lg navbar-light bg-light d-sm-none d-flex col px-4 py-2">
        <a class="navbar-brand" href="/">
          Lydia Ritchie
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#smallNavBar"
          aria-controls="smallNavBar"
          aria-expanded="true"
          aria-label="Toggle navigation"
          

        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="smallNavBar">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
             <li class="nav-item active">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/portfolio">
              Portfolio
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/contact">
              Contact
            </a>
          </li>
          </ul>
        </div>
      </nav>


    </div>
  );
}
