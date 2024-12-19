import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider({ settingsObj, children }) {
  let settings = settingsObj;

  return (
    <div className="banners">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default SlickSlider;
