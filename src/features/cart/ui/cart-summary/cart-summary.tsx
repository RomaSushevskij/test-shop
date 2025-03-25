import { useMemo } from "react";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

import { formatToCurrency } from "@/shared/lib/format-to-currency.ts";
import { useProductsQuery } from "@/entities/products";

import { useCartContext } from "../../model/use-cart-context.ts";

export const CartSummary = ({ isLoading }: { isLoading?: boolean }) => {
  const cartContext = useCartContext();
  const { data } = useProductsQuery();

  const totalPrice = useMemo(() => {
    if (!cartContext || !data) return 0;

    return Object.entries(cartContext.cartStore).reduce((totalPrice, [productId, count]) => {
      const product = data.entities[Number(productId)];

      if (!product) return totalPrice;

      return (totalPrice += product.price * count);
    }, 0);
  }, [cartContext, data]);

  return (
    <Box width={"18.75rem"}>
      <Paper component={"section"} sx={{ p: 2 }}>
        <Typography component={"h1"} variant={"h5"} fontWeight={700} marginBottom={2}>
          {isLoading ? <Skeleton width={"50%"} /> : "Your order"}
        </Typography>

        {isLoading && <Skeleton />}
        {!isLoading && (
          <Stack flexDirection={"row"} gap={4} justifyContent={"space-between"}>
            <Typography variant={"body1"}>Products, pcs</Typography>
            <Typography variant={"body1"} fontWeight={700}>
              {cartContext?.cartItemsCount}
            </Typography>
          </Stack>
        )}

        {isLoading && <Skeleton sx={{ mt: 2 }} />}
        {!isLoading && (
          <Stack flexDirection={"row"} gap={4} justifyContent={"space-between"} marginTop={2}>
            <Typography color={"textSecondary"} variant={"body1"} fontWeight={700}>
              Total price
            </Typography>
            <Typography variant={"h6"} fontWeight={700}>
              {formatToCurrency(totalPrice, "EUR")}
            </Typography>
          </Stack>
        )}
      </Paper>
    </Box>
  );
};
