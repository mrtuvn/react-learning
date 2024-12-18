import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero1 from "@assets/images/banners/hero/hero_iphone16pro_large.jpg";
import hero2 from "@assets/images/banners/hero/hero_iphone16_large.jpg";
import hero3 from "@assets/images/banners/hero/promo_iphone_tradein_large.jpg";
function Banner() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banners">
      <Slider {...settings}>
        <div>
          <img
            className="h-[500px] w-full object-cover"
            src={hero1}
            alt="abc"
            width={1000}
            height={500}
          />
        </div>
        <div>
          <img
            className="h-[500px] w-full object-cover"
            src={hero2}
            alt="abc"
            width={1000}
            height={500}
          />
        </div>
        <div>
          <img
            className="ratio-square h-[500px] w-full object-cover"
            src={hero3}
            alt="abc"
            width={1000}
            height={500}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
