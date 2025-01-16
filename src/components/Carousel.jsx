import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    "/pexels-expect-best-79873-323705.jpg", // Adjust paths for public folder
    "/pexels-pixabay-534219.jpg",
    "/pexels-veeterzy-123027.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <button className="arrow left" onClick={goToPrevious}>
          &#8592;
        </button>
        <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
        <button className="arrow right" onClick={goToNext}>
          &#8594;
        </button>
      </div>
      <div className="indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${currentIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
