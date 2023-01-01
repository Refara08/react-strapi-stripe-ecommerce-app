import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import "./Slider.scss";
import { useEffect } from "react";

const images = [
  "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  "https://images.pexels.com/photos/6632172/pexels-photo-6632172.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  "https://images.pexels.com/photos/6626999/pexels-photo-6626999.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  "https://images.pexels.com/photos/4049510/pexels-photo-4049510.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  "https://images.pexels.com/photos/6636906/pexels-photo-6636906.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
];

function Slider() {
  const [slide, setSlide] = useState(0);

  const prevSlideHandler = () => {
    if (slide !== 0) {
      setSlide((prev) => prev + 100);
    } else {
      setSlide((images.length - 1) * -100);
    }
  };

  const nextSlideHandler = () => {
    if (slide !== (images.length - 1) * -100) {
      setSlide((prev) => prev - 100);
    } else {
      setSlide(0);
    }
  };

  useEffect(() => {
    console.log(slide);
  }, [slide]);

  return (
    <div className="slider">
      <div
        className="container"
        style={{
          width: `calc(${images.length} * 100vw)`,
          transform: `translateX(${slide}vw)`,
        }}
      >
        {images.map((item, i) => (
          <img src={item} key={i} alt="" />
        ))}
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlideHandler}>
          <WestIcon />
        </div>
        <div className="icon" onClick={nextSlideHandler}>
          <EastIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
