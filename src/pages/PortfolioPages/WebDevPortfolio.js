import React from "react";
import { CardImg } from "react-bootstrap";
import flashcardHome from "../../graphics/portfolio-projects/software-engineering/flashcard-home.png";
import WebDevData from "../../utils/WebDevData";

function WebDevPortfolio() {
  return (
    <div className="main-container">
      <div className="row web-dev-container">
        {WebDevData.map((project) => (
          <div className="col-12 col-sm-6 " key={project.title}>
            <div className="card web-dev-card">
              <div className="card-body">
                <CardImg src={project.image} />
                <h5 className="card-title heading-bold">{project.title}</h5>
                <div className="link-container">
                  <a className="link-btns" target="_blank" href={project.link}>
                    Website
                  </a>
                  <a
                    className="link-btns"
                    target="_blank"
                    href={project.github}
                  >
                    Github
                  </a>
                </div>
                <div className="web-dev-subtitle">{project.description}</div>
                <div className="web-dev-subtitle small">
                  Please allow time for websites to load :)
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebDevPortfolio;
