import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevImage}>Previous</button>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;
