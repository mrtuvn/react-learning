import Image from "next/image";
import React from "react";

const GridCards = () => {
  const productsSource = [
    {
      name: "Product KTM",
      imgSrc: "/bike1.jpg",
      imgAlt: "bike1",
    },
    {
      name: "Product KTM 2",
      imgSrc: "/bike1.jpg",
      imgAlt: "bike1",
    },
    {
      name: "Product KTM 3",
      imgSrc: "/bike2.jpg",
      imgAlt: "bike2",
    },
    {
      name: "Product KTM 4",
      imgSrc: "/bike3.jpg",
      imgAlt: "bike3",
    },
    {
      name: "Product KTM 5",
      imgSrc: "/bike4.jpg",
      imgAlt: "bike4",
    },
    {
      name: "Product KTM 6",
      imgSrc: "/bike5.jpg",
      imgAlt: "bike5",
    },
    {
      name: "Product KTM 7",
      imgSrc: "/bike6.jpg",
      imgAlt: "bike6",
    },
  ];

  return (
    <div className="grid items-center justify-items-center  gap-4 text-main xs:grid-cols-1 md:grid-cols-3">
      {productsSource.map((product, index) => (
        <div className="flex gap-2 flex-col hover:outline-dotted" key={index}>
          <Image
            className="object-fit aspect-square"
            src={product.imgSrc}
            width={600}
            height={500}
            quality={100}
            priority
            alt={product.imgAlt}
          />
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default GridCards;
