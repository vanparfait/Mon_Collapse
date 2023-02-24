import React, { useState } from "react";
import CarouselItem from "../carouselItem/CarouselItem";
import "./Carousel.css";
import chevron_carousel_left from "../images/chevron_carousel_left.png";
import chevron_carousel_right from "../images/chevron_carousel_right.png";
import slides from "../data/slide";

const Carousel = () => {
  const [currentSlide, setCurrenSlide] = useState(0);

  function nextSlide() {
    setCurrenSlide(currentSlide + 1);
    if (currentSlide === slides.length - 1) {
      setCurrenSlide(0);
    }
  }

  function previousSlide() {
    setCurrenSlide(currentSlide - 1);
    if (currentSlide === 0) {
      setCurrenSlide(slides.length - 1);
    }
  }

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <CarouselItem key={index} slide={slide} />
        ))}
      </div>
      <img
        className="carousel_arrow_left"
        src={chevron_carousel_left}
        alt="shox previous slider"
        onClick={previousSlide}
      />
      <img
        className="carousel_arrow_right"
        src={chevron_carousel_right}
        alt="shox next slider"
        onClick={nextSlide}
      />
      <p className="slideCount">
        {currentSlide + 1} / {slides.length}
      </p>
    </div>
  );
};

export default Carousel;
