import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
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
        <div className="nav-bar d-flex rounded-pill portfolio-menu" style={{width: "fit-content"}}>
          <NavLink
            className="nav-link rounded-pill portfolio-btn"
            to="web-development-projects"
          >
            Web Development
          </NavLink>
          <NavLink className="nav-link rounded-pill portfolio-btn" to="design-projects">
            Design
          </NavLink>
          <NavLink className="nav-link  rounded-pill portfolio-btn" to="pottery">
            Pottery
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route path="web-development-projects" element={<WebDevPortfolio />} />
        <Route path="design-projects" element={<DesignPortfolio />} />
        <Route path="pottery" element={<PotteryPortfolio />} />
      </Routes>
    </div>
  );
}
