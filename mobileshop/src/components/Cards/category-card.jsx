import cn from "classnames";
import { Link } from "react-router";

const CategoryCard = ({ item, href, className, variant }) => {
  const { name } = item ?? {};

  return (
    <Link to={href} className={cn("group block w-full", className)}>
      <div
        className={cn("flex flex-col items-center text-[14px]", {
          "card-category--zoom gap-2": variant === "default",
          "rounded bg-white p-2 lg:p-5": variant === "card",
        })}
      >
        <div
          className={cn("card-category--thumb", {
            "relative h-[100px] min-w-[100px] overflow-hidden rounded-full bg-gray-100":
              variant === "default",
            "h-[95px] max-w-[90px]": variant === "card",
          })}
        >
          <img
            loading="lazy"
            className="absolute h-full w-full object-cover duration-300 group-hover:scale-105"
            src={`https://dummyjson.com/image/300x300/f1f5f9?fontFamily=poppins&text=${String(name).replace(/ /g, "+")}`}
            alt={name}
          />
        </div>
        <div className="category-info text-center">
          <h3 className="text-brand-dark truncate font-semibold leading-6 group-hover:text-blue-500">
            {name}
          </h3>
          {variant === "default" && (
            <p className={"text-gray-600"}>5 Products</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
