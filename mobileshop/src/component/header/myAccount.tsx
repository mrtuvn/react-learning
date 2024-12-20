import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import AccountIcon from "../icons/account-icon";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { logout } from "../../features/auth/authSlice";
interface Props {
  className?: string;
}
const links = [
  { href: "/dashboard", label: "My dashboard" },
  { href: "/wishlist", label: "Wishlist" },
  { href: "/cart", label: "Cart" },
];

export const MyAccount: React.FC<Props> = ({ className }) => {
  // Check if user is authenticated by looking for token
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoggedIn)
    return (
      <div className="accountButton shrink-0 items-center lg:flex">
        <Menu>
          <MenuButton
            as="div"
            className="flex items-center justify-center gap-1"
          >
            <div className="cart-button">
              <AccountIcon />
            </div>

            <button
              className="ms-2 text-sm font-normal focus:outline-none"
              aria-label="Authentication"
            >
              Welcome, {user?.username}
            </button>
            <BsChevronDown className="transform transition duration-300 ease-in-out" />
          </MenuButton>
          <MenuItems
            anchor={{ to: "bottom start", gap: "10px" }}
            className="z-50 min-w-[180px] rounded-md border bg-white px-4 py-3 text-sm shadow-lg"
          >
            {links.map((link) => (
              <MenuItem key={link.href}>
                <Link
                  className="block truncate py-1 leading-6 hover:text-blue-500"
                  to={link.href}
                >
                  {link.label}
                </Link>
              </MenuItem>
            ))}

            <MenuItem>
              <Link
                onClick={handleLogout}
                className="flex items-center gap-1 truncate py-1 leading-6 hover:text-blue-500"
                to="/"
              >
                <MdLogout />
                Logout
              </Link>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    );

  return (
    <Link to={"/login"} className="accountButton shrink-0 items-center lg:flex">
      <div className="cart-button">
        <AccountIcon />
      </div>
      <button
        className="ms-2 text-sm font-normal focus:outline-none"
        aria-label="Authentication"
      >
        My Account
      </button>
    </Link>
  );
};
