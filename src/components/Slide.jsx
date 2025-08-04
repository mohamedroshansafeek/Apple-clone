import React, { useState, useEffect } from "react";


const images = [
  "/src/assets/images/movie-01.png",
  "/src/assets/images/movie-02.png",
  "/src/assets/images/movie-03.png",
  "/src/assets/images/movie-04.png",
  "/src/assets/images/movie-05.png",
  "/src/assets/images/movie-06.png",
  "/src/assets/images/movie-07.png",
  "/src/assets/images/movie-08.png",
  "/src/assets/images/movie-09.png",
  "/src/assets/images/movie-10.png",
];

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //  Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Render images
  return (
    <div className="relative w-full h-64 md:h-screen overflow-hidden mt-10">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default Slide;
