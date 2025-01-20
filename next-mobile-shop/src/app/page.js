import GridCards from "@/components/cards/GridCards";
import HomeBanner from "@/components/hero/HomeBanner";

export default function Home() {
  return (
    <div className="py-2 pb-20 gap-16">
      <div className="w-full mb-10">
        <HomeBanner />
      </div>
      <div className="container mx-auto sm:items-start">
        <h2 className="text-center uppercase font-black text-3xl mb-5">
          -New PRODUCTS-
        </h2>
        <h2 className="text-center uppercase font-black text-3xl mb-5">
          FEATURED PRODUCT LISTS
        </h2>
        <GridCards />

        <h2 className="text-center uppercase font-black text-3xl mb-5">
          BLOGs
        </h2>
      </div>
    </div>
  );
}
