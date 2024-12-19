import SectionHeader from "../Common/SectionHeader";
import Carousel from "../ui/carousel/carousel";
import { SwiperSlide } from "swiper/react";
import Alert from "../ui/alert";
import cn from "classnames";
import React from "react";
import ProductCardSkeleton from "./product-skeleton";
import ProductCardMedium from "../Cards/product-card-medium";
import ProductCard from "../Cards/product-card";

const breakpoints = {
  1536: {
    slidesPerView: 5,
  },
  1280: {
    slidesPerView: 5,
  },
  1024: {
    slidesPerView: 4,
  },
  640: {
    slidesPerView: 3,
  },
  360: {
    slidesPerView: 2,
  },
  0: {
    slidesPerView: 1,
  },
};

const ProductsCarousel = ({
  sectionHeading,
  className = "",
  products,
  loading,
  error,
  limit,
  uniqueKey,
  carouselBreakpoint,
  variant = "default",
  borderCarousel,
  rowCarousel = 1,
}) => {
  return (
    <div className={cn("heightFull relative", className)}>
      {sectionHeading && (
        <>
          {(() => {
            switch (variant) {
              case "card-fur":
                return (
                  <SectionHeader
                    sectionHeading={sectionHeading}
                    sectionSubHeading="text-shop-subheading"
                    headingPosition={"center"}
                  />
                );
              case "noHeading":
                break;
              default:
                return (
                  <SectionHeader
                    sectionHeading={sectionHeading}
                    className={cn("py-3 uppercase", {
                      "mb-1.5 rounded bg-white px-5": variant === "default",
                    })}
                  />
                );
            }
          })()}
        </>
      )}

      {error ? (
        <div className="2xl:ltr:pr-10 2xl:rtl:pl-10">
          <Alert message={error} />
        </div>
      ) : (
        <div
          className={cn("heightFull", {
            "rounded border border-black/10":
              variant === "outBorder" || variant === "noHeading",
          })}
        >
          {/* Loading state */}
          {loading && (
            <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
              {Array.from({ length: 5 }).map((_, id) => (
                <div key={id} className="group rounded bg-white p-2">
                  <ProductCardSkeleton />
                </div>
              ))}
            </div>
          )}

          <Carousel
            spaceBetween={6}
            grid={{ rows: rowCarousel, fill: "row" }}
            breakpoints={carouselBreakpoint || breakpoints}
            prevActivateId={`prev${uniqueKey}`}
            nextActivateId={`next${uniqueKey}`}
          >
            {products?.map((product, idx) => (
              <SwiperSlide key={`${uniqueKey}-${idx}`} className="">
                {(() => {
                  switch (variant) {
                    case "medium":
                      return (
                        <ProductCardMedium
                          key={`${uniqueKey}-${product.id}`}
                          product={product}
                        />
                      );
                    default:
                      return (
                        <ProductCard
                          key={`${uniqueKey}-${product.id}`}
                          product={product}
                          variant={variant}
                        />
                      );
                  }
                })()}
              </SwiperSlide>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ProductsCarousel;
