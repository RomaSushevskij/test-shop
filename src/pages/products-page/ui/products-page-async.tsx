import { lazy } from "react";

export const ProductsPageAsync = lazy(() =>
  import("./products-page.tsx").then(({ ProductsPage }) => ({ default: ProductsPage })),
);
