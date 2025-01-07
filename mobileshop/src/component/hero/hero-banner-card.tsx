"use client";

import cn from "classnames";
import ImageFill from "../ui/image";
import useWindowSize from "../../utils/use-window-size";
import { Link } from "react-router-dom";

interface BannerProps {
  banner?: any;
  className?: string;
  heroContentCard?: boolean;
  variant: string;
}

function getImage(deviceWidth: number, imgObj: any) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

export default function HeroBannerCard({
  banner,
  className = "py-20 xy:pt-24",
  variant,
  heroContentCard = true,
}: BannerProps) {
  const { width } = useWindowSize();
  const { title, description, image } = banner;
  const selectedImage = getImage(width!, image);
  return heroContentCard ? (
    <>
      <ImageFill src={selectedImage.url} height={375} alt={title} />

      <div
        className={cn(
          "inset-0 flex w-full items-center overflow-hidden rounded sm:absolute",
          { "min-h-[320px] md:min-h-[367px]": variant === "slider" },
          {
            "bg-fill-thumbnail": variant !== "antique",
          },
          className,
        )}
      >
        <div
          className={cn("w-full", {
            "mx-auto max-w-[480px] md:max-w-[580px] xl:max-w-[700px]":
              variant === "slider",
            "mx-auto max-w-[480px] md:max-w-[580px] xl:max-w-[600px]":
              variant === "antique",
            "max-w-[480px] md:max-w-[580px] lg:px-20 xl:max-w-[700px]":
              variant === "slider-4",
          })}
        >
          <div
            className={cn("text-left", {
              "md:w-8/12 lg:w-6/12": variant === "slider",
              "text-left": variant === "slider-4",
            })}
          >
            <p
              className={cn("text-[12px] font-bold uppercase leading-7", {
                "text-brand-light": variant === "default",
                "": variant === "antique",
              })}
            >
              {description}
            </p>
            <h2
              className={cn(
                "mt-2 text-4xl font-semibold leading-8 md:text-4xl",
                {
                  "text-brand-light mb-3 leading-snug md:mb-4 md:leading-tight xl:mb-3 xl:text-5xl xl:leading-[1.3em] 2xl:text-[36px]":
                    variant !== "antique",
                  "text-brand-light 2xl:text-[36px]": variant === "default",
                  "text-brand-dark 2xl:text-[36px]": variant === "antique",
                },
              )}
            >
              {title}
            </h2>

            {banner.btnText && (
              <Link
                to={`${banner.btnUrl}`}
                className={cn(
                  "mt-5 inline-flex h-[44px] items-center justify-center rounded px-10 py-2 text-base font-semibold transition duration-300 md:mt-12",
                  {
                    "bg-blue-500 text-white hover:bg-blue-600":
                      variant !== "antique",
                    "text-brand-light bg-brand hover:bg-brand-dark hover:text-white":
                      variant === "antique",
                  },
                )}
              >
                {banner.btnText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <Link to={`${banner.btnUrl}`}>
      <div
        className={cn(
          "bg-skin-thumbnail flex w-full items-center bg-cover bg-no-repeat",
          {
            "min-h-[160px]": variant === "slider",
          },
          className,
        )}
        style={{
          backgroundImage: `url('${selectedImage.url}')`,
          backgroundPosition:
            variant === "antique" ? "left bottom -10px" : "center center",
        }}
      ></div>
    </Link>
  );
}
