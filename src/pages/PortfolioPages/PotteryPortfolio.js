import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import potteryData from "../../utils/data/PotteryData";

function PotteryPortfolio() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const allImages = Object.entries(potteryData).flatMap(([category, items]) =>
    items.map((item, index) => ({
      ...item,
      category,
      index,
    }))
  );

  const handleImageClick = (index) => {
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCarouselSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const capitalizeCategory = (category) => {
    return category === "additionalWorks"
      ? category.charAt(0).toUpperCase() +
          category.slice(1, 10) +
          " " +
          category.slice(10)
      : category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div>
      {Object.entries(potteryData).map(([category, items]) => (
        <div key={category} className="category-section">
          <h4
            className="heading-italic"
          >
            {capitalizeCategory(category)}
          </h4>
          <div className="pot-container">
            {items.map((item, index) => {
              const flatIndex = allImages.findIndex(
                (img) => img.category === category && img.index === index
              );
              return (
                <div key={item.id} className="pot-item">
                  <img
                    src={item.image}
                    alt={item.description}
                    loading="lazy"
                    className="pot-image"
                    onClick={() => handleImageClick(flatIndex)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ))}

      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        dialogClassName="modal-90w"
        className="90w"
      >
        <Modal.Body className="p-0">
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleCarouselSelect}
            interval={null}
            indicators={false}
            controls={true}
            slide
          >
            {allImages.map((item, idx) => (
              <Carousel.Item key={idx}>
                <div
                  style={{
                    height: idx === 46 ? "100%" : "600px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    className="d-block w-100 h-100"
                    src={item.image}
                    alt={item.description}
                    style={{
                      objectFit: "cover",
                      height: "500px",
                    }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PotteryPortfolio;
