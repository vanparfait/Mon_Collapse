import React from "react";
import "./carouselItem.css";

const CarouselItem = ({ slide }) => {
  return (
    <div className="carousel-item">
      <img src={slide} alt={slide} />
    </div>
  );
};

export default CarouselItem;
