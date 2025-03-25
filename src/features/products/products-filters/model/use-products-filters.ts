import { useLayoutEffect, useState } from "react";

import { TProductsFilters } from "./types";

export const useProductsFilters = ({
  minPrice,
  maxPrice,
}: {
  minPrice: number;
  maxPrice: number;
}) => {
  const [searchFilter, setSearchFilter] = useState<TProductsFilters["search"]>("");
  const [priceFilter, setPriceFilter] = useState<TProductsFilters["price"]>({
    from: minPrice ?? 0,
    to: maxPrice ?? 0,
  });

  const handleProductsFiltersChange = <Filter extends keyof TProductsFilters>(
    filter: Filter,
    value: TProductsFilters[Filter],
  ) => {
    if (filter === "search" && typeof value === "string") {
      setSearchFilter(value);
    }

    if (filter === "price" && typeof value !== "string") {
      setPriceFilter(value);
    }
  };

  useLayoutEffect(() => {
    if (!minPrice || !maxPrice) return;

    setPriceFilter({ from: minPrice, to: maxPrice });
  }, [minPrice, maxPrice]);

  return { priceFilter, searchFilter, handleProductsFiltersChange };
};
