import { TProduct } from "@/entities/products";

import { TProductsFilters } from "../model/types.ts";

export const filterProductsBySearchFilter = ({
  products,
  searchFilter,
}: {
  products: TProduct[];
  searchFilter: TProductsFilters["search"];
}) => {
  if (!products) {
    return [];
  }

  if (!searchFilter) {
    return products;
  }

  return products.filter((product) => {
    return product.title.toLowerCase().includes(searchFilter.toLowerCase().trim());
  });
};
