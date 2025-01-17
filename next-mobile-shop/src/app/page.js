import GridCards from "@/components/cards/GridCards";
import HomeBanner from "@/components/hero/HomeBanner";

export default function Home() {
  return (
    <div className="py-2 pb-20 gap-16">
      <div className="w-full mb-10">
        <HomeBanner />
      </div>
      <div className="container mx-auto sm:items-start">
        <h2 className="text-center font-black text-3xl mb-5">PRODUCT LISTS</h2>
        <GridCards />

        <p>BLOGs</p>
      </div>
    </div>
  );
}
