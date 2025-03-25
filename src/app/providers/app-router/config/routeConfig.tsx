import { type RouteProps } from "react-router";

import { AppRoutes, RoutePath } from "@/shared/config/routeConfig";
import { ProductsPage } from "@/pages/products-page";
import { CartPage } from "@/pages/cart-page";
import { NotFoundPage } from "@/pages/not-found-page";

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <ProductsPage />,
  },
  [AppRoutes.CART]: {
    path: RoutePath.cart,
    element: <CartPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
