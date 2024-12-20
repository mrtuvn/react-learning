import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchAllCategories } from "../api/fetchCategories";
import { LIMITS } from "../settings/limits";
import { GrNext, GrPrevious } from "react-icons/gr";
import Pagination from "../component/ui/pagination";
import { Category } from "../types/Product";
import Container from "../component/ui/container";
import Breadcrumb from "../component/ui/breadcrumb";

const CategoriesPage = () => {
  const [page, setPage] = useState(1);
  const limit = LIMITS.PAGESCATEGORIES_LIMITS;

  // Gọi API lấy fetchAllCategories với useQuery
  const { data = [], isLoading } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: () => fetchAllCategories(),
  });

  const useDataCategories = data?.slice(0, limit);
  let [filterCategories, setfilterCategories] = useState(useDataCategories);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    const to = limit * newPage;
    const from = to - limit;
    setfilterCategories(data?.slice(from, to));
  };

  useEffect(() => {
    // Update `filterData` whenever `data` or `limit` changes
    setfilterCategories(data?.slice(0, limit));
    if (!data) {
      throw new Error("Hook must be used within Provider");
    }
  }, [data, limit]);

  if (isLoading)
    return (
      <div className="flex min-h-[300px] items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );

  return (
    <Container>
      <Breadcrumb />
      <h1 className="mb-6 text-2xl font-bold capitalize">Categories</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filterCategories?.map((category: any, idx: number) => (
          <div key={category.slug} className="pointer">
            <Link to={`/categories/${category.slug}`} className="group block">
              <div className="relative overflow-hidden pb-[75%]">
                <img
                  loading="lazy"
                  className="absolute h-full w-full object-cover duration-300 group-hover:scale-105"
                  src={`https://dummyjson.com/image/600x300/f1f5f9?fontFamily=poppins&text=${String(
                    category.name,
                  ).replace(/ /g, "+")}`}
                  alt={category.name}
                />
              </div>
            </Link>
          </div>
        ))}
        <div className="pagination mt-10 rounded bg-white">
          <Pagination
            current={page}
            total={data?.length}
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
      </div>
    </Container>
  );
};

export default CategoriesPage;
