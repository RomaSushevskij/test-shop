import { useMemo } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchOffIcon from "@mui/icons-material/SearchOff";

import { ProductCard, ProductCardsSkeletons, useProductsQuery } from "@/entities/products";
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

  const renderProducts = productsFilteredByPriceRange.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      addToCartSlot={<AddProductToCartBtn product={product} />}
    />
  ));

  const renderNothingFound = (
    <Stack width={"100%"}>
      <Typography variant={"h6"}>Nothing found</Typography>
      <SearchOffIcon
        color={"primary"}
        sx={{ width: "6.25rem", height: "6.25rem", alignSelf: "center", mt: 10 }}
      />
    </Stack>
  );

  const isFilteredProducts = Boolean(productsFilteredByPriceRange.length);

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

      {!isFilteredProducts && renderNothingFound}

      {isFilteredProducts && (
        <Stack
          sx={{ flexGrow: 1 }}
          display={"grid"}
          gridTemplateColumns={"repeat(auto-fit, minmax(19.375rem, 1fr))"}
          gap={4}
        >
          {isLoading ? <ProductCardsSkeletons /> : renderProducts}
        </Stack>
      )}
    </Box>
  );
};
