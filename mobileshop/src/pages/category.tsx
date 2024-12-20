import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { SearchResponse } from "../types/Product";

import { fetchProductsByCategory } from "../api/fetchProductsByCategory";
import ProductCard from "../component/cards/product-card";
import ProductCardSkeleton from "../component/product/product-skeleton";
import { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Pagination from "../component/ui/pagination";
import { LIMITS } from "../settings/limits";
import Container from "../component/ui/container";
import Breadcrumb from "../component/ui/breadcrumb";

const CategoriesProductPage = () => {
  const [page, setPage] = useState(1);
  const limit = LIMITS.PAGECATEGORY_LIMITS;

  // Get categoryName query parameters
  const { categoryName } = useParams<{ categoryName: string }>();

  // Fetch products using react-query
  const { data, isLoading } = useQuery<SearchResponse>({
    queryKey: ["products", categoryName, limit, page],
    queryFn: () => fetchProductsByCategory(categoryName, page, limit),
    enabled: !!categoryName, // Chỉ gọi API khi có từ khóa
  });

  const { products = [], total } = data ?? {};

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Container>
      <Breadcrumb />
      <h1 className="mb-6 text-2xl font-medium capitalize">{categoryName}</h1>

      {/* Loading state */}
      {isLoading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, id) => (
            <ProductCardSkeleton key={id} />
          ))}
        </div>
      )}

      {/*Showing search results */}
      {products && (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="pagination mt-10 rounded bg-white">
            <Pagination
              current={page}
              pageSize={limit}
              total={total}
              onChange={handlePageChange}
              prevIcon={
                <GrPrevious
                  size={14}
                  className={`m-auto my-1.5 rtl:rotate-180`}
                />
              }
              nextIcon={
                <GrNext size={14} className={`m-auto my-1.5 rtl:rotate-180`} />
              }
            />
          </div>
        </>
      )}

      {/* No results message */}
      {products?.length === 0 && !isLoading && (
        <div className="no-results flex min-h-52 items-center justify-center">
          <h3 className="text-lg">Not Product found.</h3>
        </div>
      )}
    </Container>
  );
};

export default CategoriesProductPage;
