import React from "react";
import Carousel from "../ui/carousel/carousel";

import Image from "next/image";

const banners = [
  {
    bannerText: "",
    bannerSubText: "",
    bannerSrc: "/banners/hero_iphone16_large.jpg",
    bannerAlt: "",
  },
  {
    bannerText: "",
    bannerSubText: "",
    bannerSrc: "/banners/hero_iphone16pro_large.jpg",
    bannerAlt: "",
  },
  {
    bannerText: "",
    bannerSubText: "",
    bannerSrc: "/banners/hero_severance_large.jpg",
    bannerAlt: "",
  },
];
const HomeBanner = () => {
  return (
    <div>
      <Carousel>
        {banners.map((banner, index) => (
          <div key={index}>
            <Image
              src={banner.bannerSrc}
              width={3008}
              height={508}
              alt={banner.bannerAlt}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeBanner;
