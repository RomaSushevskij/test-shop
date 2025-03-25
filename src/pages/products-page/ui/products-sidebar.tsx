import { ReactElement } from "react";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import { PRODUCTS_DRAWER_WIDTH } from "../constants";

export const ProductsSidebar = ({
  priceFilter,
  searchFilter,
  isLoading,
}: {
  priceFilter: ReactElement;
  searchFilter: ReactElement;
  isLoading?: boolean;
}) => {
  const priceFilterSkeleton = (
    <Stack flexDirection={"column"}>
      <Skeleton width={"3.125rem"} />
      <Stack
        display={"grid"}
        gridTemplateColumns={"repeat(2, 1fr)"}
        gridTemplateRows={"3.125rem"}
        gap={2}
      >
        <Skeleton />
        <Skeleton />
      </Stack>

      <Skeleton height={"2rem"} />
    </Stack>
  );

  const searchFilterSkeleton = (
    <Stack flexDirection={"column"}>
      <Skeleton width={"3.125rem"} />
      <Skeleton height={"3.125rem"} />
    </Stack>
  );

  return (
    <Drawer
      open
      sx={{
        width: PRODUCTS_DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: PRODUCTS_DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <Box sx={{ p: 2 }}>{isLoading ? searchFilterSkeleton : searchFilter}</Box>
      <Divider />
      <Box sx={{ p: 2 }}>{isLoading ? priceFilterSkeleton : priceFilter}</Box>
    </Drawer>
  );
};
