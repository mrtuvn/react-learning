import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("./pages/home.tsx"),
  route("about", "./pages/about.tsx"),
  layout("./layout/auth/index.tsx", [
    route("login", "./components/auth/login.tsx"),
  ]),
] satisfies RouteConfig;
