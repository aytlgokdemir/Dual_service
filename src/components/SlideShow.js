import React, { useEffect, useState } from "react";
import p1 from "../assets/p1.JPG";
import p2 from "../assets/p2.JPG";
import p3 from "../assets/p3.JPG";
import { LeftOutlined, RightOutlined, MinusOutlined } from "@ant-design/icons";

function SlideShow() {
  const slides = [{ url: p1 }, { url: p2 }, { url: p3 }];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full max-w-screen-xl mx-auto mt-12">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-[600px] bg-center bg-cover transition-opacity ease-in-out duration-500 drop-shadow-xl"
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] left-5 text-white text-lg hover:text-xl hover:ease-in duration-300 p-2 cursor-pointer">
        <LeftOutlined onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] right-5 text-white text-lg hover:text-xl hover:ease-in duration-300 p-2 cursor-pointer">
        <RightOutlined onClick={nextSlide} size={30} />
      </div>
      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-4xl flex justify-center text-[#D9D9D9]">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer ${
              slideIndex === currentIndex ? "text-[#15202C]" : ""
            } mx-1`}
          >
            <MinusOutlined />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
