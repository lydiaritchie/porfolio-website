import React from "react";
import { CardImg } from "react-bootstrap";
import flashcardHome from "../../graphics/portfolio-projects/software-engineering/flashcard-home.png";
import { getRandomColor } from "../../utils/RandomColor";

function WebDevPortfolio() {
  return (
    <div className="main-container">
      <div className="card web-dev-card">
        <div className="card-body">
          <CardImg src={flashcardHome} />
          <div className="d-flex justify-content-between">
            <h5 className="card-title heading-bold">Flashcard App</h5>
            <div className="align-content-center">
              <a className="link-btns" target="_blank" href="https://flashcard-application-dwl6.onrender.com/">Live Website</a>
              <a className="link-btns" target="_blank" href="https://github.com/lydiaritchie/flashcard-application">Github</a>
            </div>
          </div>

          <div className="web-dev-subtitle">
            Flashcard app made with HTML, JavaScript, React and Bootstrap.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevPortfolio;
