import React from "react";
import { NavBar } from "../utils/NavBar";
import { softwareEngineeringProjects, designProjects, potteryProjects } from "../utils/projectsData";

export function Portfolio() {
  // Map project data into cards
  const softwareEngineeringCards = softwareEngineeringProjects.map(
    (project) => {
      return (
      <div className="card my-2">
        <div className="card-body">
          <div className="card-title">{project.title}</div>
          <p className="card-text">Card text</p>
        </div>
      </div>)
    }
  );

  return (
    <div className="main-container">
      <header>
        <NavBar />
      </header>
      <h5 className="text-center">Portfolio</h5>

      <div className="d-flex row m-3">
        <h6>Software Engineering</h6>
        
        {softwareEngineeringCards}
        </div>
    </div>
  );
}
