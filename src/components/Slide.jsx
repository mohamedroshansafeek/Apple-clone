import React, { useState, useEffect } from "react";
import img1 from "../assets/images/movie-01.png";
import img2 from "../assets/images/movie-02.png";
import img3 from "../assets/images/movie-03.png";
import img4 from "../assets/images/movie-04.png";
import img5 from "../assets/images/movie-05.png";
import img6 from "../assets/images/movie-06.png";
import img7 from "../assets/images/movie-07.png";
import img8 from "../assets/images/movie-08.png";
import img9 from "../assets/images/movie-09.png";
import img10 from "../assets/images/movie-10.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
   
    <div className="relative w-full h-64 sm:h-80 md:h-screen overflow-hidden mt-5">
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

export default Slideshow;
