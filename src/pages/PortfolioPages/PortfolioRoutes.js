import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import { NavBar } from "../../utils/NavBar";

export function Portfolio() {
  //State to manage clicked buttons in portfolio menu
  //Automatically goes to web development page
  const [webDevStatus, setWebDevStatus] = useState(false);
  const [designStatus, setDesignStatus] = useState(false);
  const [potteryStatus, setPotteryStatus] = useState(false);
  const [currentPath, setCurrentPath] = useState();
  const location = useLocation();

  useEffect(() => {
    const lastSegment = location.pathname.split("/").at(-1);
    if (lastSegment === "web-development") {
      setWebDevStatus(true);
      setDesignStatus(false);
      setPotteryStatus(false);
    }
    if (lastSegment === "design") {
      setWebDevStatus(false);
      setDesignStatus(true);
      setPotteryStatus(false);
    }
    if (lastSegment === "pottery") {
      setWebDevStatus(false);
      setDesignStatus(false);
      setPotteryStatus(true);
    }
  });

  return (
    <div className="main-container">
      <div className="d-flex justify-content-center">
        <div
          className="nav-bar d-flex portfolio-menu"
          style={{ width: "fit-content" }}
        >
          <NavLink
            className={`nav-link rounded-pill portfolio-btn ${
              webDevStatus ? "portfolio-btn-selected" : ""
            }`}
            to="web-development"
          >
            Web Development
          </NavLink>
          <NavLink
            className={`nav-link rounded-pill portfolio-btn ${
              designStatus ? "portfolio-btn-selected" : ""
            }`}
            to="design"
          >
            Design
          </NavLink>
          <NavLink
            className={`nav-link rounded-pill portfolio-btn ${
              potteryStatus ? "portfolio-btn-selected" : ""
            }`}
            to="pottery"
          >
            Pottery
          </NavLink>
        </div>
      </div>

      <div className="mx-4 my-2">
        <Outlet />
      </div>
    </div>
  );
}
