import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, useLocation, Outlet } from "react-router-dom";
import { NavBar } from "../../utils/NavBar";
import {
  softwareEngineeringProjects,
  designProjects,
  potteryProjects,
} from "../../utils/projectsData";
import WebDevPortfolio from "./WebDevPortfolio";
import DesignPortfolio from "./DesignPortfolio";
import PotteryPortfolio from "./PotteryPortfolio";

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

  // Map project data into cards
  const softwareEngineeringCards = softwareEngineeringProjects.map(
    (project) => {
      return (
        <div className="card my-2">
          <div className="card-body">
            <div className="card-title">{project.title}</div>
            <p className="card-text">Card text</p>
            <img src={project.image} />
          </div>
        </div>
      );
    }
  );

  return (
    <div className="main-container">
      <header>
        <NavBar />
      </header>
      <h5 className="text-center"></h5>

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

      <Outlet />
    </div>
  );
}
