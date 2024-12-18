import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { useCart } from "../components/CartPage/CartContext";
import Slider from "react-slick";

function ProductDetail() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { id } = useParams(); // Lấy ID từ URL
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { dispatch } = useCart();
  const [isCartPopup, setCartPopup] = useState(false);

  useEffect(() => {
    const fetchProductDetail = async () => {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProductDetail();
  }, [id]);

  // tab, sroll
  const [activeTab, setActiveTab] = useState(null);

  const handleScrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };
  const updateActiveTab = () => {
    const sections = document.querySelectorAll(".section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      // Check if the section is in the viewport
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveTab(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      updateActiveTab();
    });

    // Initial checks for active tab and fade-in effect
    updateActiveTab();

    return () => {
      window.removeEventListener("scroll", () => {
        updateActiveTab();
      });
    };
  }, []);

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    const item = {
      ...product,
      quantity: 1, // Default quantity is 1 when adding to the cart
    };
    dispatch({ type: "ADD_TO_CART", item }); // Dispatch the ADD_TO_CART action

    setCartPopup(true);
  };

  if (!product) {
    return (
      <div className="container" style={{ paddingTop: "30px" }}>
        Loading...
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="detail-page">
        <div className="breadcrumbs">
          <div className="container">
            <ul>
              <li>
                <Link to="/public">Home</Link> {">"}
              </li>
              <li>
                <Link to={`/category/${product.category}`}>
                  <span style={{ textTransform: "capitalize" }}>
                    {product.category.replace(/-/g, " ")}
                  </span>
                </Link>{" "}
                {">"}
              </li>
              <li>{product.title}</li>
            </ul>
          </div>
        </div>

        <div className="section sticky-top">
          <div className="container flex">
            <div style={{ maxWidth: "80%" }}>
              <div className="product-info">
                <div className="name">{product.title}</div>
                <div className="price">
                  ${product.price}
                  {product.discountPercentage && (
                    <span>Save {product.discountPercentage}%</span>
                  )}
                </div>
              </div>

              <div className="tabs flex">
                {product.images.length > 1 && (
                  <a
                    href="#tabGallery"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo("tabGallery");
                    }}
                    className={
                      activeTab === "tabGallery" ? "tab active" : "tab"
                    }
                  >
                    Gallery
                  </a>
                )}

                <a
                  href="#tabSpecs"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("tabSpecs");
                  }}
                  className={activeTab === "tabSpecs" ? "tab active" : "tab"}
                >
                  Specs
                </a>
                <a
                  href="#tabReviews"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo("tabReviews");
                  }}
                  className={activeTab === "tabReviews" ? "tab active" : "tab"}
                >
                  Reviews
                </a>
              </div>
            </div>

            <div className="btn">
              {product.availabilityStatus == "Out of Stock" ? (
                <div className="btn-default">Get stock alert</div>
              ) : (
                <button
                  className="btn-red"
                  onClick={() => handleAddToCart(product)}
                >
                  Buy now
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="section bg-white">
          <div className="container flex">
            <div className="left">
              <div className="sku">{product.sku}</div>
              <div className="name">{product.title}</div>
              <div className="product-rating flex">
                <div className="rating-summary">
                  <div
                    className="rating-result"
                    aria-hidden="true"
                    style={{ width: `${(product.rating / 5) * 100}%` }}
                  ></div>
                </div>
                {product.rating} ({product.reviews.length})
              </div>
            </div>

            <div className="right">
              <img src={product.thumbnail} alt={product.title} />
            </div>
          </div>
        </div>

        <div className="section content container text-center">
          {product.description}
        </div>

        {product.images.length > 1 && (
          <div id="tabGallery" className="section gallery">
            <div className="container">
              <div className="heading">Gallery</div>
              <div className="bg-white text-center">
                <Slider {...settings}>
                  {product.images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={product.title} />
                    </div>
                  ))}
                </Slider>

                <Slider {...settings}>
                  {product.images.map((image, index) => (
                    <div key={index}>
                      <img src={image} style={{ width: "60px" }} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        )}

        <div id="tabSpecs" className="section specs">
          <div className="container">
            <div className="bg-white">
              <div className="heading">Key Specs</div>
              <ul className="flex">
                {product.brand > 0 && (
                  <li>
                    <p className="spec-name">Brand</p>
                    {product.brand}
                  </li>
                )}
                <li>
                  <p className="spec-name">Weight</p>
                  {product.weight}
                </li>
                <li>
                  <p className="spec-name">Dimensions</p>
                  {product.dimensions.width} x {product.dimensions.height} x{" "}
                  {product.dimensions.depth}
                </li>
                <li>
                  <p className="spec-name">Tags</p>
                  <div className="tags">
                    {product.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </li>
                <li>
                  <p className="spec-name">Warranty Information</p>
                  {product.warrantyInformation}
                </li>
                <li>
                  <p className="spec-name">Shipping Information</p>
                  {product.shippingInformation}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {product.reviews.length > 0 && (
          <div id="tabReviews" className="section reviews">
            <div className="container">
              <div className="heading">Reviews</div>
              <ul>
                {product.reviews.map((review, index) => (
                  <li className="review-item flex" key={index}>
                    <div className="user">
                      {review.reviewerName}
                      <div className="date">{review.date}</div>
                    </div>
                    <div className="info">
                      <div className="product-rating flex">
                        <div className="rating-summary">
                          <div
                            className="rating-result"
                            aria-hidden="true"
                            style={{ width: `${(review.rating / 5) * 100}%` }}
                          ></div>
                        </div>
                        {review.rating}/5
                      </div>
                      <div>{review.comment}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Popup for "Item added to cart" */}
      {isCartPopup && (
        <div className="popAddToCart flex">
          <div className="popAddToCart-container">
            <button className="btn-close" onClick={() => setCartPopup(false)}>
              Close
            </button>
            <div className="content">Successfully added to your basket</div>
            <div className="button">
              <button
                className="btn btn-default"
                onClick={() => setCartPopup(false)}
              >
                Continue Shopping
              </button>
              <Link className="btn btn-red" to="/cart">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default ProductDetail;
