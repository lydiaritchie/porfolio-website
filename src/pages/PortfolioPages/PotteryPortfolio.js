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
          <h4 className="heading-italic mt-4">{capitalizeCategory(category)}</h4>
          <div className="pot-container">
            {items.map((item, index) => {
              const flatIndex = allImages.findIndex(
                (img) => img.category === category && img.index === index
              );
              return (
                <div key={item.id} className="pot-item">
                  <img
                    src={item.image}
                    srcSet={`
                      ${item.image} 800w,
                      ${item.image.replace(/\.([^.]+)$/, "-medium.$1")} 480w,
                      ${item.image.replace(/\.([^.]+)$/, "-small.$1")} 320w
                    `}
                                        sizes="(max-width: 600px) 320px,
                           (max-width: 1200px) 480px,
                           800px"
                    alt={item.description}
                    className="pot-image"
                    loading="lazy"
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
            wrap={true}
            touch={true}
            slide
          >
            {allImages.map((item, idx) => (
              <Carousel.Item key={idx}>
                <div
                  style={{
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "90vh",
                    width: "100%",
                    backgroundColor: "black",
                  }}
                >
                  <img
                    className="d-block"
                    src={item.image}
                    alt={item.description}
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "auto",
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
