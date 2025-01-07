import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}
const links = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/cart", label: "Cart" },
];

export const MenuTopMyAccount: React.FC<Props> = ({ className }) => {
  return (
    <Menu>
      <MenuButton className="flex items-center justify-center gap-1">
        My account
        <BsChevronDown className="transform transition duration-300 ease-in-out" />
      </MenuButton>
      <MenuItems
        anchor={{ to: "bottom start", gap: "4px" }}
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
      </MenuItems>
    </Menu>
  );
};
