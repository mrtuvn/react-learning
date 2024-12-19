import ProductsCarousel from "../Product/products-carousel";
import { fetchProductNewProduct } from "../../api/fetchProductNewProduct";
import { LIMITS } from "../../settings/limits";
import { useQuery } from "@tanstack/react-query";

const NewProduct = ({ className, variant }) => {
  const page = 1;
  const limit = LIMITS.BEST_SELLER_PRODUCTS_LIMITS;

  // Gọi API lấy fetchAllCategories với useQuery
  const { data, isLoading, error } = useQuery({
    queryKey: ["Products"],
    queryFn: () => fetchProductNewProduct(page, limit),
  });
  const { products = [] } = data ?? {};

  return (
    <ProductsCarousel
      sectionHeading="News Products"
      products={products}
      loading={isLoading}
      error={error?.message}
      limit={LIMITS.BEST_SELLER_PRODUCTS_LIMITS}
      uniqueKey="new-product"
      variant={variant}
      className={className}
    />
  );
};
export default NewProduct;
