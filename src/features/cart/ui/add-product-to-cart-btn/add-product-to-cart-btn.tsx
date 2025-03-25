import { useState, MouseEvent } from "react";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import { ButtonOwnProps } from "@mui/material/Button/Button";

import { TProduct } from "@/entities/products";

import { useCartContext } from "../../model/use-cart-context.ts";

type TAddToCartViewType = "add-to-cart-btn" | "count-selector";

export const AddProductToCartBtn = ({
  product,
  variant = "outlined",
}: {
  product: TProduct;
  variant?: ButtonOwnProps["variant"];
}) => {
  const cartContext = useCartContext();

  const currentProductInCartCount = cartContext?.cartStore[product.id];

  const [productsToAddCount, setProductsToAddCount] = useState<number>(
    currentProductInCartCount ?? 0,
  );

  const initViewType = () => {
    return productsToAddCount > 0 ? "count-selector" : "add-to-cart-btn";
  };

  const [viewType, setViewType] = useState<TAddToCartViewType>(initViewType);

  const handleIncrementBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setProductsToAddCount((prevProductsToAddCount) => {
      return prevProductsToAddCount + 1;
    });

    cartContext?.addToCart(product.id);
  };

  const handleDecrementBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setProductsToAddCount((prevProductsToAddCount) => {
      if (prevProductsToAddCount === 1) {
        setViewType("add-to-cart-btn");
      }

      return Math.max(prevProductsToAddCount - 1, 0);
    });

    cartContext?.removeFromCart(product.id);
  };

  const handleAddToCartBtnClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setViewType("count-selector");
    handleIncrementBtnClick(event);
  };

  if (viewType === "add-to-cart-btn") {
    return (
      <Button
        startIcon={<AddShoppingCartIcon />}
        onClick={handleAddToCartBtnClick}
        variant={variant}
      >
        Add to cart
      </Button>
    );
  }

  return (
    <Stack flexDirection={"row"} alignItems={"center"} gap={3}>
      <IconButton size={"small"} color={"primary"} onClick={handleDecrementBtnClick}>
        <RemoveIcon />
      </IconButton>
      <Typography>{productsToAddCount}</Typography>

      <IconButton size={"small"} color={"primary"} onClick={handleIncrementBtnClick}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
};
