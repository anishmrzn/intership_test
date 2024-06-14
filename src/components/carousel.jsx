import React, { useState } from "react";
import "../css/carousel.css";

const images = [
  "carousel1.png",
  "carousel2.png",
  "carousel3.png",
  "carousel4.png",
  "carousel5.png",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        <svg
          onClick={prevSlide}
          width="13"
          height="21"
          viewBox="0 0 13 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow left-arrow"
        >
          <path
            d="M10.5 20.0413L0.5 10.0413L10.5 0.0412598L12.275 1.81626L4.05 10.0413L12.275 18.2663L10.5 20.0413Z"
            fill="#585858"
          />
        </svg>
        <div
          className="carousel-images"
          style={{ transform: `translateX(-${currentIndex * 30}%)` }}
        >
          {images.map((image, index) => (
            <img key={index} src={image} alt={`carousel ${index + 1}`} />
          ))}
        </div>
        <svg
          onClick={nextSlide}
          width="13"
          height="21"
          viewBox="0 0 13 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="arrow right-arrow"
        >
          <path
            d="M2.5 0.0412606L12.5 10.0413L2.5 20.0413L0.724999 18.2663L8.95 10.0413L0.724998 1.81626L2.5 0.0412606Z"
            fill="#585858"
          />
        </svg>
      </div>
    </div>
  );
}

export default Carousel;
