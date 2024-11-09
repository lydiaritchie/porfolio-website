import React, {useState} from "react";
import { Modal, Carousel } from "bootstrap";
import potteryData from "../../utils/PotteryData";

function PotteryPortfolio() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [collapsedCategories, setCollapsedCategories] = useState({});

  const toggleCategory = (category) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleImageClick = (category, index) => {
    setSelectedCategory(category);
    setSelectedImage(potteryData[category][index]);
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleCarouselSelect = (index) => {
    setActiveIndex(index);
    setSelectedImage(potteryData[selectedCategory][index]);
  };



  return (
    <div className="">
  {Object.entries(potteryData).map(([category, items]) => (
        <div key={category} className="category-section">
          <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
          <div className="pot-container">
            {items.map((item) => (
              <div key={item.id} className="pot-item">
                <img src={item.image} alt={item.description} loading="lazy" className="pot-image" />

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PotteryPortfolio;
