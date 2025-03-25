import { useMemo } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import {
  CartItem,
  CartItemsContainer,
  CartItemsSkeletons,
  CartSummary,
  useCartContext,
} from "@/features/cart";
import { useProductsQuery } from "@/entities/products";

export const CartPage = () => {
  const cartContext = useCartContext();
  const { data, isLoading } = useProductsQuery();

  const cartProductsList = useMemo(() => {
    if (!cartContext || !data) return [];

    return Object.keys(cartContext.cartStore).map((productId) => data?.entities[Number(productId)]);
  }, [cartContext, data]);

  const isProductsInCart = Object.values(cartContext?.cartStore ?? {}).length > 0;

  const renderCartItems = cartProductsList.map((product, index, array) => {
    return (
      <CartItem key={product.id} product={product} displayDivider={index !== array.length - 1} />
    );
  });

  if (!isProductsInCart) {
    return (
      <Stack>
        <Typography variant={"h6"}>Cart is empty</Typography>
        <ShoppingBasketIcon
          color={"primary"}
          sx={{ width: "6.25rem", height: "6.25rem", alignSelf: "center", mt: 10 }}
        />
      </Stack>
    );
  }

  return (
    <Stack flexDirection={"row"} gap={3} alignItems={"start"}>
      <CartItemsContainer>
        {isLoading ? <CartItemsSkeletons /> : renderCartItems}
      </CartItemsContainer>
      <CartSummary isLoading={isLoading} />
    </Stack>
  );
};
