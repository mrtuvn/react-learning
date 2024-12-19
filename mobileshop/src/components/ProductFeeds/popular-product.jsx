import ProductsCarousel from "../Product/products-carousel";
import { LIMITS } from "../../settings/limits";
import { useQuery } from "@tanstack/react-query";
import { fetchProductPopular } from "../../api/fetchProductPopular";

const PopularProduct = ({ className, variant }) => {
  const page = 1;
  const limit = LIMITS.BEST_SELLER_PRODUCTS_LIMITS;

  // Gọi API lấy fetchAllCategories với useQuery
  const { data, isLoading, error } = useQuery({
    queryKey: ["Products"],
    queryFn: () => fetchProductPopular(page, limit),
  });
  const { products = [] } = data ?? {};

  return (
    <ProductsCarousel
      sectionHeading="Popular Products"
      products={products}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
      uniqueKey="popular"
      variant={variant}
      className={className}
    />
  );
};
export default PopularProduct;
