import { IoIosArrowUp } from "react-icons/io";
import debounce from "@libs/debounce";
import { useEffect, useState } from "react";

const BackToTopButton = () => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const handleScrollListener = debounce((e) => {
      e.preventDefault();
      const currentScrollY = window.scrollY;
      //const windowHeight = window.innerHeight;
      //const totalScrollHeight = document.body.scrollHeight;

      if (
        currentScrollY <= 100
        //|| currentScrollY >= totalScrollHeight - windowHeight - 20
      ) {
        setIsShow(false);
        return;
      }

      setIsShow(true);
    }, 100);

    window.addEventListener("scroll", handleScrollListener);

    return () => {
      window.removeEventListener("scroll", handleScrollListener);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={handleClick}
      className={`shadow-quickview fixed bottom-20 right-10 z-[100] flex h-12 w-12 cursor-pointer content-center items-center rounded-full bg-mainColor transition duration-200 ease-in-out ${!isShow && "translate-y-7 opacity-0"}`}
    >
      <IoIosArrowUp className="m-auto text-xl text-white lg:text-2xl" />
    </div>
  );
};

export default BackToTopButton;
