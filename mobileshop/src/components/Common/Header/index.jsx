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
            <span
              className={`block h-[23px] w-[23px] ${user.id ? "active" : ""}`}
            >
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.8548 21.3333C21.6915 19.3654 20.0317 17.734 18.0398 16.6004C16.0478 15.4669 13.7928 14.8706 11.4979 14.8706C9.20304 14.8706 6.94798 15.4669 4.95601 16.6004C2.96405 17.734 1.30427 19.3654 0.141025 21.3333C-0.00138538 21.5885 -0.0376415 21.889 0.0400248 22.1705C0.0766559 22.3139 0.143667 22.4478 0.236568 22.5633C0.329469 22.6789 0.446115 22.7733 0.578691 22.8403C0.74972 22.9368 0.943214 22.9868 1.1398 22.9854C1.33475 22.9937 1.52817 22.9479 1.69855 22.8533C1.86893 22.7587 2.0096 22.619 2.10491 22.4496C3.06783 20.8197 4.44211 19.4683 6.09163 18.5294C7.74115 17.5905 9.60864 17.0965 11.5091 17.0965C13.4096 17.0965 15.2771 17.5905 16.9266 18.5294C18.5761 19.4683 19.9504 20.8197 20.9133 22.4496C21.0632 22.703 21.3076 22.8874 21.5934 22.9627C21.8792 23.0379 22.1832 22.998 22.4396 22.8515C22.5672 22.7838 22.6791 22.6902 22.768 22.5767C22.8569 22.4633 22.9209 22.3325 22.9558 22.1928C22.9973 22.0501 23.0098 21.9005 22.9924 21.7529C22.9751 21.6053 22.9283 21.4626 22.8548 21.3333Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M11.5001 13.8C13.3084 13.8003 15.0445 13.0842 16.3349 11.8057C17.6254 10.5272 18.3669 8.78854 18.4001 6.96384C18.4001 5.11691 17.6731 3.34563 16.3791 2.03966C15.0851 0.733688 13.3301 0 11.5001 0C9.6701 0 7.91506 0.733688 6.62106 2.03966C5.32706 3.34563 4.6001 5.11691 4.6001 6.96384C4.63325 8.78854 5.37482 10.5272 6.66525 11.8057C7.95567 13.0842 9.69181 13.8003 11.5001 13.8ZM6.9001 6.96384C6.9001 5.73255 7.38474 4.5517 8.24741 3.68105C9.11007 2.8104 10.2801 2.32128 11.5001 2.32128C12.7201 2.32128 13.8901 2.8104 14.7528 3.68105C15.6155 4.5517 16.1001 5.73255 16.1001 6.96384C16.1001 8.19512 15.6155 9.37597 14.7528 10.2466C13.8901 11.1173 12.7201 11.6064 11.5001 11.6064C10.2801 11.6064 9.11007 11.1173 8.24741 10.2466C7.38474 9.37597 6.9001 8.19512 6.9001 6.96384Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
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
            <span className="ic-cartw">
              <svg
                width="27"
                height="23"
                viewBox="0 0 27 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3787 20.7212C19.0834 20.7212 18.8002 20.6036 18.5913 20.3944C18.3825 20.1851 18.2652 19.9014 18.2652 19.6055H16.0381C16.0381 20.4932 16.39 21.3445 17.0165 21.9722C17.643 22.5999 18.4927 22.9525 19.3787 22.9525C20.2647 22.9525 21.1144 22.5999 21.7409 21.9722C22.3674 21.3445 22.7194 20.4932 22.7194 19.6055H20.4923C20.4923 19.9014 20.3749 20.1851 20.1661 20.3944C19.9573 20.6036 19.6741 20.7212 19.3787 20.7212Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M11.5425 20.7212C11.2472 20.7212 10.9639 20.6036 10.7551 20.3944C10.5463 20.1851 10.4289 19.9014 10.4289 19.6055H8.19141C8.19141 20.0457 8.27794 20.4815 8.44607 20.8882C8.6142 21.2949 8.86062 21.6644 9.17128 21.9757C9.48194 22.2869 9.85075 22.5338 10.2566 22.7023C10.6625 22.8707 11.0976 22.9574 11.5369 22.9574C11.9763 22.9574 12.4113 22.8707 12.8172 22.7023C13.2231 22.5338 13.5919 22.2869 13.9025 21.9757C14.2132 21.6644 14.4596 21.2949 14.6278 20.8882C14.7959 20.4815 14.8824 20.0457 14.8824 19.6055H12.6553C12.6553 19.9012 12.5381 20.1849 12.3294 20.3941C12.1207 20.6033 11.8377 20.721 11.5425 20.7212Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M26.0699 2.26204C26.0092 2.25168 25.9477 2.24655 25.8862 2.2467H8.06945C7.77412 2.2467 7.49089 2.36424 7.28205 2.57347C7.07322 2.78271 6.95591 3.06649 6.95591 3.36239C6.95591 3.65829 7.07322 3.94207 7.28205 4.1513C7.49089 4.36053 7.77412 4.47808 8.06945 4.47808H24.5715L24.2771 6.24785L22.7161 15.635H8.18985L4.4038 6.24785L2.14539 0.697278C2.02596 0.43616 1.81062 0.231252 1.54419 0.125208C1.27777 0.0191644 0.980789 0.0201555 0.715076 0.127975C0.449363 0.235795 0.23539 0.442136 0.117698 0.704045C5.8841e-06 0.965954 -0.012336 1.26325 0.0832412 1.53405L3.68904 10.3989L6.14998 16.9341C6.33162 17.4843 6.70675 17.8664 7.24821 17.8664H23.6591C23.9228 17.8665 24.178 17.7729 24.3792 17.6022C24.5804 17.4314 24.7147 17.1947 24.758 16.9341L26.5355 6.24785L26.9851 3.54578C27.0336 3.25395 26.9644 2.95478 26.7928 2.71404C26.6212 2.4733 26.3612 2.31072 26.0699 2.26204Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
            {state.items.length > 0 && (
              <span className="counts absolute right-[-5px] top-[-3px] inline-block h-3.5 min-w-[18px] rounded-[100%] bg-mainColor px-0.5 py-0 text-center text-[13px] text-white">
                {state.items.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
