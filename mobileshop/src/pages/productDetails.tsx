import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/Product";
import { getIdFromSlug } from "../utils/get-id-from-slug";
import { fetchProductDetails } from "../api/fetchProductDetails";
import StarIcon from "../component/icons/star-icon";
import usePrice from "../component/product/use-price";
import CompareButton from "../component/compare/compare-button";
import WishlistButton from "../component/wishlist/wishlist-button";
import Counter from "../component/ui/counter";
import Button from "../component/ui/button";
import CartIcon from "../component/icons/cart-icon";
import { toast } from "react-toastify";
import ImageFill from "../component/ui/image";
import Container from "../component/ui/container";
import { ADD_ITEM, selectCartItemDetails } from "../features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import Breadcrumb from "../component/ui/breadcrumb";
import { ROUTES } from "../utils/routes";

const ProductDetailsPage = () => {
  const dispatch = useAppDispatch();

  const { slug } = useParams<{ slug: string }>();

  // Parse product ID from the slug. Ensure this is done only once.
  const productId = getIdFromSlug(slug as string);

  // Use `useQuery` to fetch product details, ensuring a single request
  const { data: product, isLoading } = useQuery<Product>({
    queryKey: ["product", productId],
    queryFn: () => fetchProductDetails(productId as number),
    enabled: !!productId,
  });
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const {
    id,
    title,
    category,
    price: productPrice,
    discountPercentage,
    thumbnail,
    rating,
    reviews,
    description,
    stock,
  } = product ?? {};

  //productPriceOld
  let productPriceOld: number | undefined; // Declare `productPriceOld` outside the if block
  if (productPrice !== undefined && discountPercentage !== undefined) {
    productPriceOld = Number(
      Number(productPrice / (1 - discountPercentage / 100)).toFixed(2),
    );
  }

  const { price, basePrice, discount } = usePrice({
    amount: productPrice ? productPrice : productPriceOld!, // Uses `productPriceOld` if `productPrice` is undefined
    baseAmount: productPriceOld,
    currencyCode: "USD",
  });

  // Use the new selector to get cart item details
  const cartItemDetails = useAppSelector((state) =>
    selectCartItemDetails(state, Number(id)),
  );

  // Bỏ qua selectedVariation do API ko có
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);

  const handleAddToCart = () => {
    if (product) {
      // Check if adding would exceed stock
      const totalQuantity = cartItemDetails.quantity + selectedQuantity;
      if (totalQuantity < product.stock) {
        // to show btn feedback while product carting
        setAddToCartLoader(true);
        setTimeout(() => {
          setAddToCartLoader(false);
        }, 1500);

        dispatch(ADD_ITEM({ product, quantity: selectedQuantity }));
        toast("Added to the bag", {
          progressClassName: "fancy-progress-bar",
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        // Optional: Show an error message about exceeding stock
        toast(`Cannot add more than ${product.stock} items to cart`, {
          progressClassName: "fancy-progress-bar",
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  if (isLoading)
    return (
      <div className="flex min-h-[300px] items-center justify-center bg-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );

  if (!product)
    return (
      <div className="no-results flex min-h-52 items-center justify-center">
        <h3 className="text-lg">Not Product found.</h3>
      </div>
    );

  return (
    <Container>
      <Breadcrumb />
      <div className="grid-cols-10 gap-8 lg:grid">
        <div className="col-span-5 mb-6 overflow-hidden">
          <ImageFill
            src={thumbnail || "Product Image"}
            height={530}
            alt={title || "Product Image"}
          />
        </div>
        <div className="col-span-5 shrink-0">
          <h1 className="mb-4 text-3xl font-bold">{title}</h1>
          <div className="mb-4 flex space-x-1 text-gray-500">
            <div className="flex items-center">
              {rating !== undefined &&
                [...Array(5)].map((_, idx) => (
                  <StarIcon
                    key={idx}
                    color={idx < rating ? "#F3B81F" : "#DFE6ED"}
                    className="mx-0.5 h-3 w-3"
                  />
                ))}
            </div>

            {reviews !== undefined && (
              <span className="text-[13px] leading-4">
                ({reviews.length} review)
              </span>
            )}
          </div>

          <div className="my-8 text-3xl text-gray-500">
            <div className="flex gap-x-2">
              <div className="font-bold text-black">{price}</div>
              {basePrice && (
                <div className="text-gray-400 line-through">{basePrice}</div>
              )}
            </div>
            <div className="text-lg text-red-600">Save up to {discount}</div>
          </div>
          <Link
            key={category}
            to={`${ROUTES.CATEGORIES}/${category}`}
            className="mb-4 inline-block rounded bg-gray-100 px-3 py-1"
          >
            {category}
          </Link>
          <p className="mb-5 text-gray-700">{description}</p>

          <div className="space-y-7 pt-4">
            <Counter
              variant="single"
              value={selectedQuantity}
              onIncrement={() => setSelectedQuantity((prev) => prev + 1)}
              onDecrement={() =>
                setSelectedQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
              }
              disabled={
                cartItemDetails.isInCart
                  ? cartItemDetails.quantity + selectedQuantity >= Number(stock)
                  : selectedQuantity >= Number(stock)
              }
            />
            <div className="flex gap-2">
              <Button
                onClick={handleAddToCart}
                className="w-64 px-1.5"
                loading={addToCartLoader}
              >
                <CartIcon color="#ffffff" className="mr-3" />
                Add To Cart
              </Button>

              <CompareButton
                product={product}
                className="flex w-14 items-center justify-center"
              />
              <WishlistButton
                product={product}
                className="flex w-14 items-center justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailsPage;
