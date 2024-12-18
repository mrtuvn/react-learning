import { lazy, Suspense } from "react";
// Các component của từng trang
const Home = lazy(() => import("@pages/HomePage"));
const CategoryPage = lazy(() => import("@pages/CategoryPage"));
const Login = lazy(() => import("@pages/LoginPage"));
const ProductByCategory = lazy(() => import("@pages/ProductByCategory"));
const ProductDetail = lazy(() => import("@pages/ProductDetail"));
const ProductSearch = lazy(() => import("@pages/ProductSearch"));
const CartPage = lazy(() => import("@pages/CartPage"));
const AccountPage = lazy(() => import("@pages/AccountPage"));
const BlogPage = lazy(() => import("@pages/BlogPage"));
const BlogDetail = lazy(() => import("@pages/BlogDetail"));
const BlogAdmin = lazy(() => import("@pages/BlogAdmin"));
const PrivateRoute = lazy(() => import("@pages/PrivateRoute"));

const routers = [
  {
    id: "1",
    path: "/",
    element: <Home />,
  },
  {
    id: "2",
    path: "/blog",
    element: <BlogPage />,
  },
  {
    id: "3",
    path: "/cart",
    element: <CartPage />,
  },
  {
    id: "4",
    path: "/category",
    element: <CategoryPage />,
  },
  {
    id: "5",
    path: "/login",
    element: <Login />,
  },
  {
    id: "6",
    path: "/category/:slug",
    element: <ProductByCategory />,
  },
  {
    id: "7",
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    id: "8",
    path: "/search/:search",
    element: <ProductSearch />,
  },
  {
    id: "9",
    path: "/account",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute>
          <AccountPage />
        </PrivateRoute>
      </Suspense>
    ),
  },
  {
    id: "10",
    path: "/blog/:id",
    element: <BlogDetail />,
  },
  {
    id: "11",
    path: "/admin/blog",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PrivateRoute>
          <BlogAdmin />
        </PrivateRoute>
      </Suspense>
    ),
  },
];

export default routers;
