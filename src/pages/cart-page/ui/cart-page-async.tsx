import { lazy } from "react";

export const CartPageAsync = lazy(() =>
  import("./cart-page.tsx").then(({ CartPage }) => ({ default: CartPage })),
);
