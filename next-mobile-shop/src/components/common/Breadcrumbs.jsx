import React from "react";
import { Home } from "lucide-react";

const Breadcrumbs = () => {
  return (
    <div className="container bg-black-200 mx-auto py-2 flex gap-2 items-center w-full text-main">
      <Home className=" w-[20px] h-[20px]" color="black" size={20} /> / Page /
      Page2
    </div>
  );
};

export default Breadcrumbs;
