"use client";

import cn from "classnames";
import { Link } from "react-router-dom";
import { useWindowSize } from "react-use";
import ImageFill from "../ui/image";

interface BannerProps {
  banner: any;
  variant?: "rounded" | "default";
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
}

function getImage(deviceWidth: number, imgObj: any) {
  return deviceWidth < 768 ? imgObj.mobile : imgObj.desktop;
}

const BannerCard: React.FC<BannerProps> = ({
  banner,
  className,
  variant = "default",
  effectActive = true,
  classNameInner,
}) => {
  const { width } = useWindowSize();
  const { slug, title, image } = banner;
  const selectedImage = getImage(width!, image);
  return (
    <div className={cn("mx-auto", className)}>
      <Link
        to={`${slug}`}
        className={cn(
          "group relative flex h-full w-full justify-center overflow-hidden",
          classNameInner,
        )}
      >
        <div className="box-sizing relative inline-block w-full overflow-hidden">
          <ImageFill
            src={selectedImage.url}
            height={selectedImage.height}
            alt={title}
          />
        </div>
        {effectActive && (
          <div className="z-5 group-hover:animate-shine absolute top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-30 ltr:-left-full rtl:-right-full" />
        )}
      </Link>
    </div>
  );
};

export default BannerCard;
