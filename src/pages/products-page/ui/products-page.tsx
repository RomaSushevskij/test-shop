import { useMemo } from "react";
import Box from "@mui/material/Box";

import { ProductCard, useProductsQuery } from "@/entities/products";
import { ProductsSidebar } from "./products-sidebar.tsx";
import {
  defineMinMaxProductsPrices,
  filterProductsByPriceFilter,
  filterProductsBySearchFilter,
  ProductsPriceFilter,
  ProductsSearchFilter,
  useProductsFilters,
} from "@/features/products/products-filters";
import { AddProductToCartBtn } from "@/features/cart";

import { ProductsGrid } from "./products-grid.tsx";

export const ProductsPage = () => {
  const { data, isLoading } = useProductsQuery();

  const productsList = useMemo(() => {
    return data?.ids.map((productId) => data?.entities[productId]);
  }, [data]);

  const minMaxPrices = useMemo(() => {
    return defineMinMaxProductsPrices(productsList ?? []);
  }, [productsList]);

  const { priceFilter, searchFilter, handleProductsFiltersChange } = useProductsFilters({
    minPrice: minMaxPrices.min,
    maxPrice: minMaxPrices.max,
  });

  const productsFilteredBySearch = useMemo(() => {
    return filterProductsBySearchFilter({ products: productsList ?? [], searchFilter });
  }, [searchFilter, productsList]);

  const productsFilteredByPriceRange = useMemo(() => {
    return filterProductsByPriceFilter({ products: productsFilteredBySearch ?? [], priceFilter });
  }, [priceFilter, productsFilteredBySearch]);

  const isFilteredProducts = Boolean(productsList) && Boolean(productsFilteredByPriceRange.length);

  const renderProducts = productsFilteredByPriceRange.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      addToCartSlot={<AddProductToCartBtn product={product} />}
    />
  ));

  return (
    <Box sx={{ display: "flex" }}>
      <ProductsSidebar
        isLoading={isLoading}
        priceFilter={
          <ProductsPriceFilter
            value={priceFilter}
            onChange={(value) => handleProductsFiltersChange("price", value)}
            min={minMaxPrices.min}
            max={minMaxPrices.max}
          />
        }
        searchFilter={
          <ProductsSearchFilter
            value={searchFilter}
            onChange={(value) => handleProductsFiltersChange("search", value)}
          />
        }
      />

      <ProductsGrid
        renderProducts={renderProducts}
        isLoading={isLoading}
        isFilteredProducts={isFilteredProducts}
      />
    </Box>
  );
};
