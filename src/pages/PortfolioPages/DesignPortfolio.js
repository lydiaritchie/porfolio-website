import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import designData from "../../utils/data/DesignData";

function DesignPortfolio() {
  const [showModal, setShowModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const allImages = Object.entries(designData).flatMap(([category, items]) =>
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
      {Object.entries(designData).map(([category, items]) => (
        <div key={category} className="category-section">
          <h4 className="heading-italic">{capitalizeCategory(category)}</h4>
          <div className="design-container">
            {items.map((item, index) => {
              const flatIndex = allImages.findIndex(
                (img) => img.category === category && img.index === index
              );
              return (
                <div key={item.id} className="design-item" style={{
                  padding: 0, // Remove any padding from the container
                  overflow: "hidden", // Prevents the scaled image from overflowing outside its container
                }}>
                  <img
                    src={item.image}
                    alt={item.description}
                    loading="lazy"
                    className="design-img"
                    onClick={() => handleImageClick(flatIndex)}
                    style={{ transform: `scale(${item.scale})`, width: "100%", display: "block",}}
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
        <Modal.Body
          className="p-0"
          style={{ maxHeight: "90vh", overflow: "hidden" }}
        >
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
                  className=""
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "black",
                  }}
                >
                  <img
                    className="d-block"
                    src={item.image}
                    alt={item.description}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "90vh",
                      objectFit: "contain",
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

export default DesignPortfolio;
