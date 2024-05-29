import { useState } from "react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <button
        className="carousel__button carousel__button--left"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <div className="carousel__image-container">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel__image"
        />
      </div>
      <button
        className="carousel__button carousel__button--right"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
}
