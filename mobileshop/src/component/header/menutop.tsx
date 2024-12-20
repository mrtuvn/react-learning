import { Link } from "react-router-dom";
import { IoIosHeart, IoIosSync } from "react-icons/io";

import cn from "classnames";
import { MenuTopMyAccount } from "./menuAccount";
import { useAppSelector } from "../../hooks/useAppSelector";

interface MenuProps {
  className?: string;
}

const HeaderMenutop: React.FC<MenuProps> = ({ className }) => {
  const compareList = useAppSelector((state) => state.compare.compareList);
  const wishlistList = useAppSelector((state) => state.wishlist.items);

  return (
    <div className={cn("smx-auto pace-s-5 flex flex-shrink-0", className)}>
      <nav className="relative flex transition-all duration-200 ease-in-out">
        <div className="menuItem group mx-2 cursor-pointer md:mx-3">
          <Link
            to="/wishlist"
            className="flex items-center gap-1 py-2 hover:text-blue-500"
          >
            <IoIosHeart className="h-4 w-4" />
            Wishlist({wishlistList.length})
          </Link>
        </div>
        <div className="menuItem group mx-2 cursor-pointer md:mx-3">
          <Link
            to="/compare"
            className="flex items-center gap-1 py-2 hover:text-blue-500"
          >
            <IoIosSync className="h-4 w-4" />
            Compare({compareList.length})
          </Link>
        </div>

        <MenuTopMyAccount />
      </nav>
    </div>
  );
};
export default HeaderMenutop;
