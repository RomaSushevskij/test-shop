import { TProduct } from "@/entities/products";

import { TProductsFilters } from "../model/types";

export const filterProductsByPriceFilter = ({
  products,
  priceFilter,
}: {
  products: TProduct[];
  priceFilter: TProductsFilters["price"];
}) => {
  if (!products) {
    return [];
  }

  return products.filter((product) => {
    return product.price >= priceFilter.from && product.price <= priceFilter.to;
  });
};
