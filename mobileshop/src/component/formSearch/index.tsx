// @ts-ignore
import React, { useState, useMemo } from "react";
import cn from "classnames";
import { Product } from "../../types/Product";
import { fetchSearchProducts } from "../../api/index";
import SearchItem from "./searchItem";
import { useQuery } from "@tanstack/react-query";
import Scrollbar from "../ui/scrollbar";
import SearchSkeleton from "./searchSkeleton";
import { useNavigate } from "react-router-dom";

interface Props {
  className?: string;
}

const FormSearch: React.FC<Props> = ({ className = "md:w-[730px]" }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  // Gọi API tìm kiếm sản phẩm với useQuery dựa trên từ khóa và danh mục
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["products", searchTerm, category],
    queryFn: () => fetchSearchProducts(searchTerm, category),
    enabled: !!searchTerm, // Chỉ gọi API khi có từ khóa
  });

  // Sử dụng useMemo để chỉ lọc lại danh sách khi searchTerm thay đổi
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    return products;
  }, [products]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${searchTerm}&category=${category}`);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearching(true);
  };

  // Handle input focus to show dropdown
  const handleSearchFocus = () => {
    setIsSearching(true);
  };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
  };

  // Handle blur event to close the popover
  const handleBlur = () => {
    setTimeout(() => {
      setIsSearching(false);
    }, 200); // Short delay to allow selection
  };

  return (
    <div
      className={cn(
        "relative w-full transition-all duration-200 ease-in-out",
        className,
      )}
    >
      <form onSubmit={handleSubmit} className="flex flex-row gap-2">
        <div className="flex w-full flex-row rounded border shadow-inner">
          <input
            type="text"
            className="w-full bg-transparent px-3 py-2"
            placeholder="Search products..."
            value={searchTerm}
            onFocus={handleSearchFocus}
            onChange={handleSearchChange}
            onBlur={handleBlur} // Triggered when input loses focus
          />
          <select
            value={category}
            onChange={handleCategoryChange}
            className="w-50 border-l bg-transparent px-4 py-2"
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="beauty">Beauty</option>
            <option value="groceries">Groceries</option>
            <option value="kitchen-accessories">Kitchen-accessories</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-40 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {/* Dropdown showing search results */}
      {searchTerm.length > 2 && isSearching && (
        <div className="absolute left-0 top-[50px] z-30 w-full overflow-hidden rounded border bg-white shadow-lg">
          <Scrollbar className="os-host-flexbox">
            <div className="max-h-[380px] w-full">
              {/* Loading state */}
              {isLoading && <SearchSkeleton />}

              {/* No results message */}
              {filteredProducts?.length === 0 && !isLoading && (
                <div className="no-results flex min-h-52 items-center justify-center">
                  <h3 className="text-lg">
                    Not found! Try with another keyword.
                  </h3>
                </div>
              )}

              {/*Dropdown showing search results */}
              {filteredProducts?.length > 0 &&
                filteredProducts?.map((product) => (
                  <SearchItem key={product.id} product={product} />
                ))}
            </div>
          </Scrollbar>
        </div>
      )}
    </div>
  );
};
export default FormSearch;
