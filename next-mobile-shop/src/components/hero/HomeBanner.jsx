import React from "react";
import Carousel from "../ui/carousel/carousel";
import Image from "next/image";

const banners = [
  {
    bannerText: "16",
    bannerSubText: "",
    bannerSrc: "/banners/hero_iphone16_large.jpg",
    bannerAlt: "",
  },
  {
    bannerText: "16pro",
    bannerSubText: "",
    bannerSrc: "/banners/hero_iphone16pro_large.jpg",
    bannerAlt: "",
  },
  {
    bannerText: "hero",
    bannerSubText: "",
    bannerSrc: "/banners/hero_severance_large.jpg",
    bannerAlt: "",
  },
];

const breakpoints = {
  1480: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  1280: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  600: {
    slidesPerView: 2,
    spaceBetween: 1,
  },
  0: {
    slidesPerView: 2,
    spaceBetween: 1,
  },
};

const HomeBanner = () => {
  return (
    <Carousel
      lang="en"
      breakpoints={breakpoints}
      navigation={true}
      pagination={true}
    >
      {banners.map((banner, index) => (
        <div className="swiper-slide" key={index}>
          <Image
            src={banner.bannerSrc}
            width={3008}
            height={508}
            alt={banner.bannerAlt}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeBanner;
