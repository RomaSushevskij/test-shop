import { JSX } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SearchOffIcon from "@mui/icons-material/SearchOff";

import { ProductCardsSkeletons } from "@/entities/products";

export const ProductsGrid = ({
  isLoading,
  renderProducts,
  isFilteredProducts,
}: {
  isLoading: boolean;
  renderProducts: JSX.Element[];
  isFilteredProducts: boolean;
}) => {
  if (isLoading) {
    return (
      <Stack
        sx={{ flexGrow: 1 }}
        display={"grid"}
        gridTemplateColumns={"repeat(auto-fit, minmax(19.375rem, 1fr))"}
        gap={4}
      >
        <ProductCardsSkeletons />
      </Stack>
    );
  }

  if (!isFilteredProducts) {
    return (
      <Stack width={"100%"}>
        <Typography variant={"h6"}>Nothing found</Typography>
        <SearchOffIcon
          color={"primary"}
          sx={{ width: "6.25rem", height: "6.25rem", alignSelf: "center", mt: 10 }}
        />
      </Stack>
    );
  }

  return (
    <Stack
      sx={{ flexGrow: 1 }}
      display={"grid"}
      gridTemplateColumns={"repeat(auto-fit, minmax(19.375rem, 1fr))"}
      gap={4}
    >
      {renderProducts}
    </Stack>
  );
};
