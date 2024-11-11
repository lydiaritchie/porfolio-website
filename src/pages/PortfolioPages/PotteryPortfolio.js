import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import potteryData from "../../utils/PotteryData";

function PotteryPortfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [collapsedCategories, setCollapsedCategories] = useState({});

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

  return (
    <div className="">
      {Object.entries(potteryData).map(([category, items]) => (
        <div key={category} className="category-section">
          <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
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
        <Modal.Body className="p-0" style={{ height: "auto" }}>
          <Carousel
            activeIndex={activeIndex}
            onSelect={handleCarouselSelect}
            interval={null}
            indicators={false}
            controls={true}
            slide
          >
            {allImages.map((item, idx) => (
              <Carousel.Item
                key={idx}
                style={{ backgroundColor: "transparent" }}
              >
                <div
                  style={{
                    width: "100%", // Full width of carousel
                    height: "600px", // Fixed height for consistency
                    overflow: "hidden", // Prevents overflow of images
                    display: "flex", // Center image inside the div
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    className="d-block w-100 h-100"
                    src={item.image}
                    alt={item.description}
                    style={{
                      objectFit: "cover", // Ensures the image fills the container and maintains aspect ratio
                      height: "500px", // Set a fixed height
                      maxWidth: "100%", // Ensure it takes up full width
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
