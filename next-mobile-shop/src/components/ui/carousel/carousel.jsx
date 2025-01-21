"use client";
import "swiper/css";
//import "./swiper-carousel.css";
//import cn from "classnames";
import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, Navigation, Autoplay, Pagination, Grid } from "./slider";
import "swiper/css/autoplay";
import "swiper/css/grid";
import "swiper/css/pagination";
import { getDirection } from "../../../utils/get-direction";

export default function Carousel({
  lang,
  children,
  className = "",
  buttonGroupClassName = "",
  prevActivateId = "",
  nextActivateId = "",
  prevButtonClassName = " start-3 xl:start-5 ",
  nextButtonClassName = " end-3 xl:end-5",
  buttonSize = "default",
  breakpoints,
  navigation = false,
  pagination = false,
  loop = false,
  spaceBetween = 20,
  grid,
  autoplay,
  ...rest
}) {
  const dir = getDirection(lang);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // let nextButtonClasses = cn(
  //   "swiper-next w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-white absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-md",
  //   { "3xl:text-2xl": buttonSize === "default" },
  //   nextButtonClassName
  // );

  // let prevButtonClasses = cn(
  //   "swiper-prev w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl cursor-pointer flex items-center justify-center rounded-full bg-white absolute transition duration-300 hover:bg-brand hover:text-brand-light focus:outline-none transform shadow-md",
  //   { "3xl:text-2xl": buttonSize === "default" },
  //   prevButtonClassName
  // );

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperParams = {
      loop,
      breakpoints,

      autoplay: {
        delay: 2500, // Autoplay delay in milliseconds
        disableOnInteraction: false, // Stop autoplay on user interaction
      },
      ...rest,
    };

    if (navigation) {
      swiperParams.navigation = {
        nextEl: ".swiper-button-next", // Next button selector
        prevEl: ".swiper-button-prev", // Previous button selector
      };
    }

    if (pagination) {
      swiperParams.pagination = {
        el: ".swiper-pagination", // Pagination element selector
        clickable: true, // Makes pagination clickable
      };
    }

    const swiperInstance = new Swiper(swiperRef.current, swiperParams);

    // Cleanup function to destroy Swiper instance when component unmounts
    return () => {
      if (swiperInstance) {
        swiperInstance.destroy();
      }
    };
  }, [breakpoints, loop, autoplay, navigation, pagination, rest]);

  return (
    <div className="swiper" ref={swiperRef} dir={dir}>
      <div className="swiper-wrapper">
        {/* Slides */}
        {children}
      </div>
      {/* If we need pagination */}
      {pagination && <div className="swiper-pagination"></div>}

      {/* If we need navigation buttons */}
      {navigation && (
        <>
          <div className="swiper-button-prev">
            <ChevronLeft ref={prevRef} />
          </div>
          <div className="swiper-button-next">
            <ChevronRight ref={nextRef} />
          </div>
        </>
      )}
    </div>
  );
}
