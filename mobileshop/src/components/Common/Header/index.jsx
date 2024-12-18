import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "./style.css";
//import mainLogo from "@assets/images/logo.svg";
import { useCart } from "../../CartPage/CartContext";
import { useUser } from "../../LoginPage/UserContext";
import CategoryList from "../../CategoryList";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const { user, logout } = useUser();

  const menuItems = [
    // {name: 'Home', path: '/'},
    { name: "Blogs", path: "/blog" },
  ];

  // Handle search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery.trim()}`); // Navigate to search results page with query
    }

    // Clear the search input after submitting
    setSearchQuery("");
  };

  return (
    <header className="header-wrapper">
      <div className="container">
        <h2 style={{ margin: 0 }}>
          <Link to="" style={{ color: "#000", textDecoration: "none" }}>
            {/* <img src={mainLogo} className="logo" alt="logo main" /> */}
            <span className="text-[25px] font-black">T.N Mobile</span>
          </Link>
        </h2>

        <nav className="menu">
          <ul>
            <li className="level0">
              <Link to="/category">Categories</Link>
              <div className="mega-menu">
                <div className="mega-menu-container">
                  <div className="container">
                    <CategoryList />
                  </div>
                </div>
              </div>
            </li>

            {menuItems.map((item, index) => (
              <li className="level0" key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
            {user.id && (
              <li className="level0">
                <Link to="/admin/blog">Created a post</Link>
              </li>
            )}
          </ul>
        </nav>

        <div className="header-right">
          <form className="search-form" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What can we help you find today?"
            />
          </form>

          <div className="account-wrapper">
            <span className={`ic-account ${user.id ? "active" : ""}`}></span>
            <ul className="links">
              {user.id ? (
                <>
                  <li className="welcome">
                    Welcome!
                    <br /> {user.username}!
                  </li>
                  <li>
                    <Link to="/account">My Account</Link>
                  </li>
                  <li>
                    <Link to="/order">My Order</Link>
                  </li>
                  <li>
                    <Link to="/admin/blog">Created a post</Link>
                  </li>
                  <li onClick={logout} style={{ cursor: "pointer" }}>
                    <span>Logout</span>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <Link className="minicart" to="/cart">
            <span className="ic-cart"></span>
            {state.items.length > 0 && (
              <span className="count">{state.items.length}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
