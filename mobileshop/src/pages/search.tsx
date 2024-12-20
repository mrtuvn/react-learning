import { useSearchParams } from "react-router-dom";
import { fetchProductsBySearch } from "../api/fetchProductsBySearch";
import { useQuery } from "@tanstack/react-query";
import { SearchResponse, Product } from "../types/Product";
import ProductCard from "../component/cards/product-card";
import ProductCardSkeleton from "../component/product/product-skeleton";
import { useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import Pagination from "../component/ui/pagination";
import { LIMITS } from "../settings/limits";
import Container from "../component/ui/container";

const SearchPage = () => {
  const [page, setPage] = useState(1);
  const limit = LIMITS.PAGESEARCH_LIMITS;

  // Get search and category query parameters
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  // Fetch products using react-query
  const { data, isLoading } = useQuery<SearchResponse>({
    queryKey: ["products", searchTerm, category, page],
    queryFn: () => fetchProductsBySearch(searchTerm, category, page, limit),
    enabled: !!searchTerm, // Chỉ gọi API khi có từ khóa
  });

  const { products = [], total } = data ?? {};

  useEffect(() => {
    setPage(1); // Reset page on new search
  }, [searchTerm, category]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <Container>
      <h1 className="mb-6 text-2xl font-bold capitalize">
        Search Results for "{searchTerm}"
      </h1>
      {/* Loading state */}
      {isLoading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, id) => (
            <ProductCardSkeleton key={id} />
          ))}
        </div>
      )}

      {/*Showing search results */}
      {products.length > 0 && (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="pagination mt-10 rounded bg-white">
            <Pagination
              current={page}
              total={total}
              pageSize={limit}
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

export default SearchPage;
