import React from "react";
import { Modal, Carousel } from "bootstrap";
import { additionalWorks } from "../../utils/ProjectsData";
import pottery1 from "../../graphics/pots/portfolio/additional-works/pottery1.png";

function PotteryPortfolio() {
  const allImages = [{
    id: 1,
    title: "blue vase",
    image: pottery1,
  }];

  const slides = allImages.map((image) => ({
    src: image.image,
    alt: image.title,
    title: image.title,
  }));

  return (
    <div className="main-container">
      <h5>Pottery Portfolio</h5>

      <div className="container">
        <div className="row">
      
        </div>
      </div>
    </div>
  );
}

export default PotteryPortfolio;
